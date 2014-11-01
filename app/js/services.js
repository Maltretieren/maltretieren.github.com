"use strict";

/**
 * @namespace Services
 * @description   Services are singleton objects used to share data (e.g. among several controllers) and generallyencapsulate reusable pieces of code (since they can be injected and offer their "services" in any part of your app that needs them: controllers, directives, filters, other services etc).
 */

/**
 * @namespace Service.GithubAuthService
 * @memborOf Services
 * @description xyz
 */
myApp.service("GithubAuthService", function ($http, $q, $rootScope, UserModel) {
    var github = null;

    return {
        /**
         * @funvtion instance
         * @memberOf Services.GithubAuthService
         */
        instance : function(username, password) {
            // this should ask for the UserModel - user object, and get the token from there...
            // the token is stored in localStorage, maybe a session store would work also?
            if(github===null) {
                console.info("new github instance "+username);
                var oauthToken = localStorage.getItem("oauthToken");

                // search for info in localStorage
                if(typeof username === 'undefined' && typeof password === 'undefined' && UserModel.getUser() !== null) {
                    username = UserModel.getUser().name;
                    password = UserModel.getUser().password;
                    console.log("localStorage - Username: "+username);
                }

                if(typeof username !== 'undefined' && typeof password !== 'undefined') {
                    console.log("using username/password workflow")
                    github = new Octokit({
                        username: username,
                        password: password,
                        auth: "basic"
                    });
                } else if(oauthToken != "undefined" && oauthToken != null) {
                    console.log("using oath workflow");
                    github = new Octokit({
                        token: oauthToken,
                        auth: "oauth"
                    });
                } else {
                    console.info("oauthToken is not available or not valid");
                    console.info("Did you login via github? Otherwise you can connect via Basic Authentication... Please provide a username and password...")
                }
            } else {
                console.log("service already instanciated")
            }
            return github;
        },
        /**
         * @function requestCode
         * @memberOf Services.GithubAuthService
         * @description request a oAuth code from Github
         */
        requestCode: function() {
            console.log("Request a new token, the page will be reloaded with code appended to the address...");
            // request a token, this generates a state random string, the string has to be validated after login
            jso_configure({
                "github": {
                    client_id: config.github.client_id,
                    redirect_uri: config.github.redirection_url,
                    authorization: config.github.authorization
                }
            });

            $.oajax({
                jso_provider: "github",
                jso_allowia: true
            });
        },
        /**
         * @function requestToken
         * @memberOf Services.GithubAuthService
         * @description request a oAuth token from Github
         */
        requestToken: function(oauthCode) {
            var that = this;
            var tokenPromise = $q.defer();

            $http({method: 'GET', url: config.heroku.authenticate+""+oauthCode}).
                success(function(data, status, headers, config) {
                    if(typeof data.token != 'undefined') {
                        console.log("Yaayy, got a token: "+data.token);
                        localStorage.setItem("oauthToken", data.token);
                        tokenPromise.resolve();
                    } else {
                        console.log("It was not possible to get a token with the provided code");
                        tokenPromise.reject();
                    }
                }).
                error(function(data, status, headers, config) {
                    alert("Error while getting a token for the provided code");
                });

            return tokenPromise.promise;
        },
        /**
         * @function userInfo
         * @memberOf Services.GithubAuthService
         * @description xyz
         */
        userInfo: function() {
            var self = this;

            /** @private  */
            var user = function() {
                var githubInstance = self.instance();
                var user = githubInstance.getUser();

                var userPromise = user.getInfo();
                return userPromise;
            };

            return {
                /** @private  */
                user: function() { return user(); }
            }
        },
        /** @private  */
        logout: function() {
            github = null;
            UserModel.logout();
        }
    }
});

/**
 * @namespace Services.GithubSrvc
 * @memborOf Services
 * @description xyz
 */
myApp.service("GithubSrvc", function (
    $rootScope, $q, $interval, GithubAuthService,
    UserModel, PollingSrvc, YamlSrvc, EditorSrvc, UrlSrvc, $http, $timeout) {

    return {
        /** @private  */
        requestCode: function() {
            GithubAuthService.requestCode();
        },
        /** @private  */
        testAdmin: function() {
            var deferred = $q.defer();
            var githubInstance = GithubAuthService.instance();
            console.log(config.github.user);
            console.log(config.github.repository);
            var repo = githubInstance.getRepo(config.github.user, config.github.repository);
            var branch = repo.getBranch("master");
            var promise = this.commit("Test if the logged in user has admistrative priveleges to commit to the repo", "tests/results/test.admin", branch);
            promise.then(function() {
                console.log("testAdming: success");
				UserModel.setIsAdmin(true);
                deferred.resolve();
            }, function(reason) {
                console.log("testAdmin: errrrorrr");
				UserModel.setIsAdmin(false);
                deferred.reject();
            })
            return deferred.promise;
        },
        /** @private  */
		fork: function(options) {
            // options contain the name for the new github page and the site slogan
			var githubInstance = GithubAuthService.instance();
			if(githubInstance != null) {
                // this is the name of the original repo
                var repo = githubInstance.getRepo(config.github.user, config.github.repository);
                var promise = $q.when(repo.fork());
                return promise;
            } else {
                console.log("no token provided... Please login");
            }
		},
        /**
         * @function renameRepo
         * @memberOf Services.GithubSrvc
         * @description xyz
         */
        renameRepo: function(forkName) {
			console.log("rename repo to "+forkName);
            if(!forkName || forkName.length < 5){
				forkName = UserModel.getUser().name+".github.com"
			}
			
            var that = this;
            var patch = {
                name: forkName
            };
            var githubInstance = GithubAuthService.instance();
            //var userName = UserModel.getUser().name;
            var repo = githubInstance.getRepo(UserModel.getUser().name, config.github.repository);
            return $q.when(repo.updateInfo(patch)).then(function(res) {
                console.log("Repository renamed...")
                //that.renameBranch(forkName, "heads/master");
            })
        },
        /** @private  */
        batchDelete: function(forkName) {
            var githubInstance = GithubAuthService.instance();
            var repo = githubInstance.getRepo(UserModel.getUser().name, forkName);
            var branch = repo.getBranch("master");

			// polling for the posts dir every second until rename complete,
			// then start delete every second....
			(function tick(path) {
				$q.when(branch.contents(path)).then(function(res) {
					console.log("cleanup of _posts...");
					var i = 0;
					$interval(function() {
						if(res[i].type === "file") {
							branch.remove(res[i].path, "deleted");
						} else {
							console.log(res[i].path + " is a folder - delete the content instead");
							tick(res[i].path);
						}
						i++;
					}, 1500, res.length);
				}, function(err) {
					$timeout(tick("_posts"), 1000);
				});
			})();

        },
        /** @private  */
        getContents: function(path) {
            var githubInstance = GithubAuthService.instance();
			var readyPromise = $q.defer();
			
			if(githubInstance != null) {
				var repo = githubInstance.getRepo(config.github.user, config.github.repository);
				var branch = repo.getBranch("master");
				var self = this;

				console.log(path);
				var contentArray = {};
				
				var folderCounter = 0;
				var fileCounter = 0;
				
				// preprocess response to seperate files/folders
				var filesPath = [];
				var foldersPath = [];

				var j = 0;
				var fileCountDeferred = $q.defer();
				// find all files to export also in subfolders
                /** @private  */
				var fileCount = function(path) {
					branch.contents(path).then(function(response) {
						var res = JSON.parse(response);

						for(var i=0; i<res.length;i++) {
							if(res[i].type === "file") {
								filesPath.push(res[i].path);
							} else {
								foldersPath.push(res[i].path);
							}
						}

						if(j!==foldersPath.length) {
							var newFolder = foldersPath[j++];
							console.log(newFolder);
							fileCount(newFolder);
						} else {
							fileCountDeferred.resolve(filesPath);
						}
					});
				};
				// this is the toplevel folder to search for files
				fileCount(path);

				return fileCountDeferred.promise;
			} else {
				readyPromise.reject("Could not init githubInstance");
				return readyPromise.promise;
			}
        },
        /** @private  */
		getFiles: function(fileNames) {
			var self = this;
			
			var githubInstance = GithubAuthService.instance();
            var repo = githubInstance.getRepo(config.github.user, config.github.repository);
            var branch = repo.getBranch("master");
						
			var contents = {};
			var i=1;
			
			var fileDeferred = $q.defer();
            /** @private  */
			var doGet = function(fileName) {
				var fileName = fileName;
				self.getContent(fileName).then(function(response) {
					contents[fileName] = response.content;
                    fileDeferred.notify(i);
                    if(i !== fileNames.length) {
						doGet(fileNames[i++]);
					} else {
						fileDeferred.resolve(contents);
					}
					
				});
			}
			// trigger with first, proceed all with a promise loop
			doGet(fileNames[0]);
			
			return fileDeferred.promise;
		},
        /**
         * @function deleteBranch
         * @memberOf Services.GithubSrvc
         * @description With the help of this function the template brach is deleted after forkin
         */
        deleteBranch: function(forkName, branchName) {
			var that = this;
			var githubInstance = GithubAuthService.instance();
			var repo = githubInstance.getRepo(UserModel.getUser().name, forkName);
			return repo.git.deleteRef(branchName).then(function(result) {
				console.log("deleted branch"+branchName);
				//that.renameBranch(forkName);
			});
        },
        /** @private  */
        renameBranch: function(forkName) {
			var that = this;
			var githubInstance = GithubAuthService.instance();
			var repo = githubInstance.getRepo(UserModel.getUser().name, forkName);
			return repo.git.deleteRef("heads/master").then(function(result) {
				console.log("deleted master branch");
				//that.createBranch(forkName, "master");
			});
        },
        /** @private  */
        createBranch: function(forkName, branchName) {
			var that = this;
			var githubInstance = GithubAuthService.instance();
			var repo = githubInstance.getRepo(UserModel.getUser().name, forkName);
			console.log("switch to template branche");
			var branch = repo.getBranch("template");
			var forkName = forkName;
			console.log("create master branch from template");
			return branch.createBranch("master").then(function() {
				console.log("master branch created from template branch");
                branch = repo.getBranch("master");
			});
        },
        /** @private  */
        postProcess: function(path, replace, repositoryName) {
            var self = this;
            var content = this.getContent(path);
            var deferred = $q.defer();
            content.then(function(data) {
                var configLine = data.content.split('\n');
                var newConfigData = "";
                for(var i = 0;i < configLine.length;i++){
                    var split = configLine[i].split(":");
                    var replaceKey = split[0].trim();
                    var replaceHit = replace[replaceKey];
                    if(typeof replaceHit != 'undefined') {
                       console.log("HITTTTTT")
                       newConfigData += split[0]+": "+replaceHit+"\n";
                    } else {
                       newConfigData += configLine[i]+"\n";
                    }
                }
                //console.log(newConfigData);
                var githubInstance = GithubAuthService.instance();
                var repo = githubInstance.getRepo(UserModel.getUser().name, repositoryName);
                var branch = repo.getBranch("master");
                var commitPromise = self.commit(newConfigData, path, branch, false);
                commitPromise.then(function() {
                    console.log("updated backend config data");
                    deferred.resolve(newConfigData);
                });
            });
            return deferred.promise;
        },
        /**
         * @function renameRepo
         * @memberOf Services.GithubSrvc
         * @description Get content of a file hosted on GitHub
         */
        getContent: function(path) {
            var githubInstance = GithubAuthService.instance();
            var deferred = $q.defer();
			
			if(githubInstance != null) {
				var repo = githubInstance.getRepo(config.github.user, config.github.repository);
				var branch = repo.getBranch("master");
				var contents = branch.read(path, false)

				contents.then(function(result) {
				   deferred.resolve(result);
				});
				return deferred.promise;
			} else {
				deferred.reject("Could not init githubInstance");
				return deferred.promise;
			}
        },
        /**
         * @function editContent
         * @memberOf Services.GithubSrvc
         * @description Edit content on a file hosted on github
         * @returns a save promise after editing.
         */
        editContent: function(path) {
            var self = this;
            var path = path;
			
			// get the content you want to edit from github
            var githubInstance = GithubAuthService.instance();
			var deferred = $q.defer();
			if(githubInstance != null) {
				var repo = githubInstance.getRepo(config.github.user, config.github.repository);
				var branch = repo.getBranch("master");
				var contents = branch.read(path, false)
				
				// if the content is ready, fill the editor, when the save button is clicked a promise is resolved...
				contents.then(function(result) {
					var frontMatter = YamlSrvc.parse(result.content);
					EditorSrvc.open(frontMatter.content);
					deferred.resolve(frontMatter);
				});
				return deferred.promise;
			} else {
				deferred.reject("Could not init githubInstance");
				return deferred.promise;
			}
        },
        /**
         * @function commit
         * @memberOf Services.GithubSrvc
         * @description Commit a file back to GitHub
         */
		commit: function(text, path, branch, showMessage, force) {
			if(typeof branch === 'undefined') {
				var githubInstance = GithubAuthService.instance();
				var repo = githubInstance.getRepo(config.github.user, config.github.repository);
				branch = repo.getBranch("master");
			}
			var contents = {};
            if(typeof text == 'string') {
                contents[path] = text;
            } else {
               contents = text;
            }

            var deferred = $q.defer();

            branch.writeMany(contents, 'Save from GUI', force).then(function() {
                deferred.resolve();
				if(showMessage) {
					$rootScope.$broadcast('Toast::githubCommitSuccess');
				}
            }, function(error) {
                console.log("there was a commit error");
                deferred.reject();
            });
            return deferred.promise;
        },
        /**
         * @function commitMany
         * @memberOf Services.GithubSrvc
         * @description Commit many files back to GitHub
         */
		commitMany: function(posts, message, showMessage, force) {
			var githubInstance = GithubAuthService.instance();
			var repo = githubInstance.getRepo(config.github.user, config.github.repository);
			var branch = repo.getBranch("master");

            var deferred = $q.defer();
            branch.writeMany(posts, message, force).then(function() {
                deferred.resolve();
				if(showMessage) {
					$rootScope.$broadcast('Toast::githubCommitSuccess');
				}
            }, function(error) {
                console.log("there was a commit error");
                deferred.reject();
            });
            return deferred.promise;
        },
        /**
         * @function deleteContent
         * @memberOf Services.GithubSrvc
         * @description Delete content from GitHub
         */
        deleteContent: function(path) {
            var githubInstance = GithubAuthService.instance();
            var repo = githubInstance.getRepo(config.github.user, config.github.repository);
            var branch = repo.getBranch("master");
            return branch.remove(path, 'Deleted Post from GUI');
        }
    }
});

// Inspired by http://joelhooks.com/blog/2013/04/24/modeling-data-and-state-in-your-angularjs-application/
/**
 * @namespace Services.UserModel
 * @memborOf Services
 * @description xyz
 */
myApp.service("UserModel", function ($rootScope) {
	this.user = {};

    /** @private  */
    var serializeUser = function(user) {
        var userJson = JSON.stringify(user);
        localStorage.setItem("user", userJson);
    }

    /** @private  */
	this.setUserName = function(userName) {
		this.user.name = userName;
        $rootScope.$broadcast('UserModel::userLoggedIn');
        serializeUser(this.user);
	};

    /** @private  */
    this.setIsAdmin = function(isAdmin) {
        this.user.isAdmin = isAdmin;
        serializeUser(this.user);
    },

    /** @private  */
    this.setPassword = function(password) {
        this.user.password = password;
        serializeUser(this.user);
    },

    /** @private  */
	this.logout = function() {
		this.user = {};
		localStorage.clear();
		$rootScope.$broadcast('UserModel::userLoggedOut');
	}

    /** @private  */
	this.getUser = function() {
		var userString = localStorage.getItem("user");
		if(typeof userString !== 'undefined') {
			var userObject = JSON.parse(userString);
			return userObject;
		} else {
			return null;
		}
	}
});

/**
 * @namespace Services.UrlSrvc
 * @memborOf Services
 * @description xyz
 */
myApp.service("UrlSrvc", function ($window) {
    /** @private  */
    var getParams = function (url, paramName) {
		var urlParams;
		(

            /** @private  */
            $window.onpopstate = function () {
			var match,
				pl     = /\+/g,  // Regex for replacing addition symbol with a space
				search = /([^&=]+)=?([^&]*)/g,

  				query  = url.split('?')[1];

			urlParams = {};
			while (match = search.exec(query))
				urlParams[decode(match[1])] = decode(match[2]);
		})();
		return urlParams[paramName];
	}
    /** @private  */
    var getUrl = function () {
        return window.location.search;
    }

    /**
     * @function parseDateTitle
     * @memberOf Services.UrlSrvc
     * @description This function extracts date and title from a Jekyll path
     * @returns an object with date and title
     */
	var parseDateTitle = function (path) {	
		var splif = path.split("-");
		var title = ""
		var date = splif[0].split("/")[1]+"-"+splif[1]+"-"+splif[2];
		for(var i=3;i<splif.length;i++) {
			if(i!==splif.length-1) {
				title += splif[i]+" ";
			} else {
				title += splif[i].split(".")[0];
			}
		}
		return {
			date: date,
			title: title
		}
	}
	
	return {
		getParams: getParams,
		parseDateTitle: parseDateTitle,
        getUrl: getUrl
	}
});

/**
 * @namespace Services.PollingSrvc
 * @memborOf Services
 * @description xyz
 */
myApp.service("PollingSrvc", function ($q, $timeout, UserModel, GithubAuthService) {
        /** @private  */
        var poll = function (repoName, branchName) {
        var resource = "README.md";
        var deferred = $q.defer();
        // poll for availability - implement as promise, resolve as soon as it is available
		var githubInstance = GithubAuthService.instance();
		var repo = githubInstance.getRepo(UserModel.getUser().name, repoName);
		var branch = repo.getBranch(branchName);
		var repoName = repoName;
		var branchName = branchName;

        /** @private  */
		var restartPolling = function() {
		    var promise = branch.read(resource,false);
			promise.then(function(res) {
				console.log("branch available")
				deferred.resolve();
			}, function(err) {
                /** @private  */
				var restart = function(){
					restartPolling(repoName, branchName)
				}
				$timeout(restart, 2000);
			});
		}
		restartPolling();

        return deferred.promise;
    };
    return { checkForBranchContent: poll }
});

/**
 * @namespace Services.YamlSrvc
 * @memborOf Services
 * @description YamlSrvc can parse files with frontmatter (normal post) and the _config.yaml without frontmatter
 */
myApp.service("YamlSrvc", function () {
    /** @private  */
    var parse = function (content) {
		var response = {};

        // if there is a frontmatter available (parsing of a post source code)...
		var contentSplit = content.split("---");
        var lineSplit = 0;

        // different handle for _config.yml and normal sites
        if(contentSplit.length === 3) {
            lineSplit = contentSplit[1].split("\n");
            // trim leading line breaks
            var trimmedLinebreaks = contentSplit[2].replace(/^[\r\n]+|[\r\n]+$/g,'');
            response["content"] = trimmedLinebreaks;
        } else if(contentSplit.length === 1) {
            response["content"] = contentSplit[0];
        }

		var remember = "";

        // parse the text to an js object
		for(var i=0; i<lineSplit.length; i++) {
			if(lineSplit[i] !== "") {
				var line = lineSplit[i].split(":");
				if(line.length===2 && line[1].trim() !== "") {
                    // deal with boolean
                    var value = line[1].trim();
                    if(value === "true" || value === "false") {
						// convert to a boolean object
                        value = (line[1].trim() === 'true');
                    } else {
						value = line[1].trim();
					}
                    response[line[0]] = value;
				} else {
					var element = line[0].split("-");
                    var value = "";
					if(element.length === 1) {
						value = element[0].trim();
                        remember = value;
						response[value] = [];
					} else {
                        value = element[1].trim();
                        if(value === "true" || value === "false") {
                            value = Boolean(element[1].trim());
						    response[remember].push(value);
                        }
                        response[remember].push(value);
					}
				}
			}
		}
		return response;
    };

    /** @private  */
	var create = function (content) {
		var response = "---\n";
		for (var key in content) {
			if(key !== "content") {
				response += key+":";
				if (typeof content[key] === 'string'|| typeof content[key] === 'boolean') {
					response += " "+content[key]+"\n";
				} else if(content[key].length!==0) {
					for(var i=0; i<content[key].length; i++) {
						response += "\n - "+content[key][i]+"\n";
					}
				} else {
					response += "\n";
				}
			}
		}
		response += "---\n";
		// remove empty lines
		response = response.replace(/^\s*\n/gm, "");
		
		response += content['content'];
		return response;
    };


    return { 
		parse: parse,
		create: create
	}
});

/**
 * @namespace Services.EditorSrvc
 * @memborOf Services
 * @description xyz
 */
myApp.service("EditorSrvc", function () {
    /** @private  */
    var getEditorContent = function() {
        return $('#target-editor').markdown()[0].value;
    };

    /** @private  */
    var showContentInEditor = function(editorContent) {
        $('#target-editor').markdown({
            savable:false,
            height:500,
            /** @private  */
            onFocus: function(e) {
                console.log("editor focused")
            }
        });
        $('#target-editor').val(editorContent);
        $('#target-editor').show();
    }

    return {
        getEditorContent: getEditorContent,
        open: showContentInEditor
    }
});

/**
 * @namespace Services.PollingImgSrvc
 * @memborOf Services
 * @description xyz
 */
myApp.service("PollingImgSrvc", function ($q, $timeout) {
    /** @private  */
    var poll = function (repoName) {
        var deferred = $q.defer();

        /** @private  */
        var pollForImg = function() {
            if(!angular.isUndefined(repoName)) {
                console.log("poll");
                var img = new Image();

                /** @private */
                img.onload = function () {
                    console.log("yehh");
                    deferred.resolve();
                }

                /** @private */
                img.onerror = function () {
                    console.log("oh noooo");
                    /** @private  */
                    var pollForImage = function () {
                        pollForImg();
                    }
                    $timeout(pollForImage, 30000);
                }
                img.src = "https://" + repoName + "/app/img/ping.gif";
            } else {
                return deferred.reject("fn should be called with a repoName")
            }
        }
        pollForImg();

        return deferred.promise;
    };
    return { checkReady: poll }
});

/**
 * @namespace Services.StyleSwitcher
 * @memborOf Services
 * @description xyz
 */
myApp.service("StyleSwitcher", function () {
	return {
        /** @private  */
        switch: function (styleName) {
            console.log("switch to style: " + styleName);
            if (typeof styleName !== 'undefined' && styleName !== '') {
                var i, link_tag;
                for (i = 0, link_tag = document.getElementsByTagName("link");
                     i < link_tag.length; i++) {
                    if ((link_tag[i].rel.indexOf("stylesheet") != -1) &&
                        link_tag[i].title) {
                        link_tag[i].disabled = true;
                        if (link_tag[i].title == styleName) {
                            link_tag[i].disabled = false;
                        }
                    }
                }
            }
        }
    }
});

