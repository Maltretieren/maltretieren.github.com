---
layout: documentation
categories:
- template
tagline:
tags:
- example
published: true
---

<!-- injected DocCtrl via documentation layo -->
<a name="Controllers"></a>
#Controllers
The controller must be responsible for binding model data to views using $scope, and control information flow. It does not contain logic to fetch the data or manipulating it.

**Members**

* [Controllers](#Controllers)
  * [Controllers.CommentsCtrl](#Controllers.CommentsCtrl)
    * [CommentsCtrl.getComments()](#Controllers.CommentsCtrl.getComments)
    * [CommentsCtrl.deleteComment(event)](#Controllers.CommentsCtrl.deleteComment)
    * [CommentsCtrl.submit()](#Controllers.CommentsCtrl.submit)
  * [Controllers.DocCtrl](#Controllers.DocCtrl)
  * [Controllers.KeenioMasterCtrl](#Controllers.KeenioMasterCtrl)
  * [Controllers.WikiquoteCtrl](#Controllers.WikiquoteCtrl)
  * [Controllers.TableCtrl](#Controllers.TableCtrl)
  * [Controllers.GithubModalCtrl](#Controllers.GithubModalCtrl)
  * [Controllers.GithubCtrl](#Controllers.GithubCtrl)
    * [GithubCtrl.requestCode()](#Controllers.GithubCtrl.requestCode)
    * [GithubCtrl.logout()](#Controllers.GithubCtrl.logout)
  * [Controllers.ConfigCtrl](#Controllers.ConfigCtrl)
    * [ConfigCtrl.saveFrontendConfig()](#Controllers.ConfigCtrl.saveFrontendConfig)
    * [ConfigCtrl.saveBackendConfig()](#Controllers.ConfigCtrl.saveBackendConfig)
  * [Controllers.ToasterController](#Controllers.ToasterController)
    * [ToasterController.pop(toast)](#Controllers.ToasterController.pop)
  * [Controllers.GithubForkCtrl](#Controllers.GithubForkCtrl)
    * [GithubForkCtrl.checkUnique()](#Controllers.GithubForkCtrl.checkUnique)
    * [GithubForkCtrl.fork()](#Controllers.GithubForkCtrl.fork)
  * [Controllers.AdminCtrl](#Controllers.AdminCtrl)
  * [Controllers.ExportCtrl](#Controllers.ExportCtrl)
    * [ExportCtrl.zip()](#Controllers.ExportCtrl.zip)
  * [Controllers.ImportCtrl](#Controllers.ImportCtrl)
  * [Controllers.GithubEditCtrl](#Controllers.GithubEditCtrl)
    * [GithubEditCtrl.getTagClass(city)](#Controllers.GithubEditCtrl.getTagClass)
  * [Controllers.RatingCtrl](#Controllers.RatingCtrl)

<a name="Controllers.CommentsCtrl"></a>
##Controllers.CommentsCtrl
`Bundles` *functions* to receive and save comments

**Members**

* [Controllers.CommentsCtrl](#Controllers.CommentsCtrl)
  * [CommentsCtrl.getComments()](#Controllers.CommentsCtrl.getComments)
  * [CommentsCtrl.deleteComment(event)](#Controllers.CommentsCtrl.deleteComment)
  * [CommentsCtrl.submit()](#Controllers.CommentsCtrl.submit)

<a name="Controllers.CommentsCtrl.getComments"></a>
###CommentsCtrl.getComments()
receive comments

<a name="Controllers.CommentsCtrl.deleteComment"></a>
###CommentsCtrl.deleteComment(event)
receive comments

**Params**

- event   

<a name="Controllers.CommentsCtrl.submit"></a>
###CommentsCtrl.submit()
receive comments

<a name="Controllers.DocCtrl"></a>
##Controllers.DocCtrl
xyz

**Members**

* [Controllers.DocCtrl](#Controllers.DocCtrl)

<a name="Controllers.KeenioMasterCtrl"></a>
##Controllers.KeenioMasterCtrl
xyz

**Members**

* [Controllers.KeenioMasterCtrl](#Controllers.KeenioMasterCtrl)

<a name="Controllers.WikiquoteCtrl"></a>
##Controllers.WikiquoteCtrl
xyz

**Members**

* [Controllers.WikiquoteCtrl](#Controllers.WikiquoteCtrl)

<a name="Controllers.TableCtrl"></a>
##Controllers.TableCtrl
xyz

**Members**

* [Controllers.TableCtrl](#Controllers.TableCtrl)

<a name="Controllers.GithubModalCtrl"></a>
##Controllers.GithubModalCtrl
xyz

**Members**

* [Controllers.GithubModalCtrl](#Controllers.GithubModalCtrl)

<a name="Controllers.GithubCtrl"></a>
##Controllers.GithubCtrl
xyz

**Members**

* [Controllers.GithubCtrl](#Controllers.GithubCtrl)
  * [GithubCtrl.requestCode()](#Controllers.GithubCtrl.requestCode)
  * [GithubCtrl.logout()](#Controllers.GithubCtrl.logout)

<a name="Controllers.GithubCtrl.requestCode"></a>
###GithubCtrl.requestCode()
request a oAuth token from Github

<a name="Controllers.GithubCtrl.logout"></a>
###GithubCtrl.logout()
Calls GithubAuthService.logout() - this is not really a logout from github, but the access token is deleted

<a name="Controllers.ConfigCtrl"></a>
##Controllers.ConfigCtrl
xyz

**Members**

* [Controllers.ConfigCtrl](#Controllers.ConfigCtrl)
  * [ConfigCtrl.saveFrontendConfig()](#Controllers.ConfigCtrl.saveFrontendConfig)
  * [ConfigCtrl.saveBackendConfig()](#Controllers.ConfigCtrl.saveBackendConfig)

<a name="Controllers.ConfigCtrl.saveFrontendConfig"></a>
###ConfigCtrl.saveFrontendConfig()
Commit frontend config file back to github

<a name="Controllers.ConfigCtrl.saveBackendConfig"></a>
###ConfigCtrl.saveBackendConfig()
Commit backend config file to github

<a name="Controllers.ToasterController"></a>
##Controllers.ToasterController
xyz

**Members**

* [Controllers.ToasterController](#Controllers.ToasterController)
  * [ToasterController.pop(toast)](#Controllers.ToasterController.pop)

<a name="Controllers.ToasterController.pop"></a>
###ToasterController.pop(toast)
Show popup message

**Params**

- toast   

<a name="Controllers.GithubForkCtrl"></a>
##Controllers.GithubForkCtrl
xyz

**Members**

* [Controllers.GithubForkCtrl](#Controllers.GithubForkCtrl)
  * [GithubForkCtrl.checkUnique()](#Controllers.GithubForkCtrl.checkUnique)
  * [GithubForkCtrl.fork()](#Controllers.GithubForkCtrl.fork)

<a name="Controllers.GithubForkCtrl.checkUnique"></a>
###GithubForkCtrl.checkUnique()
This checks if the repo already exists

<a name="Controllers.GithubForkCtrl.fork"></a>
###GithubForkCtrl.fork()
manages to fork this page

<a name="Controllers.AdminCtrl"></a>
##Controllers.AdminCtrl
Unlock admin functionality

**Members**

* [Controllers.AdminCtrl](#Controllers.AdminCtrl)

<a name="Controllers.ExportCtrl"></a>
##Controllers.ExportCtrl
This controller exports/imports post as a zip

**Members**

* [Controllers.ExportCtrl](#Controllers.ExportCtrl)
  * [ExportCtrl.zip()](#Controllers.ExportCtrl.zip)

<a name="Controllers.ExportCtrl.zip"></a>
###ExportCtrl.zip()
zip files

<a name="Controllers.ImportCtrl"></a>
##Controllers.ImportCtrl
This controller imports posts from a zip archive

**Members**

* [Controllers.ImportCtrl](#Controllers.ImportCtrl)

<a name="Controllers.GithubEditCtrl"></a>
##Controllers.GithubEditCtrl
This controller manages edits on content on github

**Members**

* [Controllers.GithubEditCtrl](#Controllers.GithubEditCtrl)
  * [GithubEditCtrl.getTagClass(city)](#Controllers.GithubEditCtrl.getTagClass)

<a name="Controllers.GithubEditCtrl.getTagClass"></a>
###GithubEditCtrl.getTagClass(city)
Set the css style for tags / categories

**Params**

- city   

<a name="Controllers.RatingCtrl"></a>
##Controllers.RatingCtrl
Star rating

**Members**

* [Controllers.RatingCtrl](#Controllers.RatingCtrl)

<a name="Services"></a>
#Services
Services are singleton objects used to share data (e.g. among several controllers) and generallyencapsulate reusable pieces of code (since they can be injected and offer their "services" in any part of your app that needs them: controllers, directives, filters, other services etc).

**Members**

* [Services](#Services)
  * [Services.GithubSrvc](#Services.GithubSrvc)
    * [GithubSrvc.renameRepo(forkName)](#Services.GithubSrvc.renameRepo)
    * [GithubSrvc.deleteBranch(forkName, branchName)](#Services.GithubSrvc.deleteBranch)
    * [GithubSrvc.getContent(path)](#Services.GithubSrvc.getContent)
    * [GithubSrvc.editContent(path)](#Services.GithubSrvc.editContent)
    * [GithubSrvc.commit(text, path, branch, showMessage, force)](#Services.GithubSrvc.commit)
    * [GithubSrvc.commitMany(posts, message, showMessage, force)](#Services.GithubSrvc.commitMany)
    * [GithubSrvc.deleteContent(path)](#Services.GithubSrvc.deleteContent)
  * [Services.UserModel](#Services.UserModel)
  * [Services.UrlSrvc](#Services.UrlSrvc)
    * [UrlSrvc.parseDateTitle(path)](#Services.UrlSrvc.parseDateTitle)
  * [Services.PollingSrvc](#Services.PollingSrvc)
  * [Services.YamlSrvc](#Services.YamlSrvc)
  * [Services.EditorSrvc](#Services.EditorSrvc)
  * [Services.PollingImgSrvc](#Services.PollingImgSrvc)
  * [Services.StyleSwitcher](#Services.StyleSwitcher)

<a name="Services.GithubSrvc"></a>
##Services.GithubSrvc
xyz

**Members**

* [Services.GithubSrvc](#Services.GithubSrvc)
  * [GithubSrvc.renameRepo(forkName)](#Services.GithubSrvc.renameRepo)
  * [GithubSrvc.deleteBranch(forkName, branchName)](#Services.GithubSrvc.deleteBranch)
  * [GithubSrvc.getContent(path)](#Services.GithubSrvc.getContent)
  * [GithubSrvc.editContent(path)](#Services.GithubSrvc.editContent)
  * [GithubSrvc.commit(text, path, branch, showMessage, force)](#Services.GithubSrvc.commit)
  * [GithubSrvc.commitMany(posts, message, showMessage, force)](#Services.GithubSrvc.commitMany)
  * [GithubSrvc.deleteContent(path)](#Services.GithubSrvc.deleteContent)

<a name="Services.GithubSrvc.renameRepo"></a>
###GithubSrvc.renameRepo(forkName)
xyz

**Params**

- forkName   

<a name="Services.GithubSrvc.deleteBranch"></a>
###GithubSrvc.deleteBranch(forkName, branchName)
With the help of this function the template brach is deleted after forkin

**Params**

- forkName   
- branchName   

<a name="Services.GithubSrvc.getContent"></a>
###GithubSrvc.getContent(path)
Get content of a file hosted on GitHub

**Params**

- path   

<a name="Services.GithubSrvc.editContent"></a>
###GithubSrvc.editContent(path)
Edit content on a file hosted on github

**Params**

- path   

<a name="Services.GithubSrvc.commit"></a>
###GithubSrvc.commit(text, path, branch, showMessage, force)
Commit a file back to GitHub

**Params**

- text   
- path   
- branch   
- showMessage   
- force   

<a name="Services.GithubSrvc.commitMany"></a>
###GithubSrvc.commitMany(posts, message, showMessage, force)
Commit many files back to GitHub

**Params**

- posts   
- message   
- showMessage   
- force   

<a name="Services.GithubSrvc.deleteContent"></a>
###GithubSrvc.deleteContent(path)
Delete content from GitHub

**Params**

- path   

<a name="Services.UserModel"></a>
##Services.UserModel
xyz

**Members**

* [Services.UserModel](#Services.UserModel)

<a name="Services.UrlSrvc"></a>
##Services.UrlSrvc
xyz

**Members**

* [Services.UrlSrvc](#Services.UrlSrvc)
  * [UrlSrvc.parseDateTitle(path)](#Services.UrlSrvc.parseDateTitle)

<a name="Services.UrlSrvc.parseDateTitle"></a>
###UrlSrvc.parseDateTitle(path)
This function extracts date and title from a Jekyll path

**Params**

- path   

<a name="Services.PollingSrvc"></a>
##Services.PollingSrvc
xyz

**Members**

* [Services.PollingSrvc](#Services.PollingSrvc)

<a name="Services.YamlSrvc"></a>
##Services.YamlSrvc
YamlSrvc can parse files with frontmatter (normal post) and the _config.yaml without frontmatter

**Members**

* [Services.YamlSrvc](#Services.YamlSrvc)

<a name="Services.EditorSrvc"></a>
##Services.EditorSrvc
xyz

**Members**

* [Services.EditorSrvc](#Services.EditorSrvc)

<a name="Services.PollingImgSrvc"></a>
##Services.PollingImgSrvc
xyz

**Members**

* [Services.PollingImgSrvc](#Services.PollingImgSrvc)

<a name="Services.StyleSwitcher"></a>
##Services.StyleSwitcher
xyz

**Members**

* [Services.StyleSwitcher](#Services.StyleSwitcher)

<a name="modifiyConfig"></a>
#modifiyConfig()
Description

<a name="link"></a>
#link(scope, element, attrs, ctrl)
Description

**Params**

- scope   
- element   
- attrs   
- ctrl   

<a name="link"></a>
#link(scope, elem, attrs)
Description

**Params**

- scope   
- elem   
- attrs   

<a name="handler"></a>
#handler(setup)
Description

**Params**

- setup   

<a name="LABjsLoaded"></a>
#LABjsLoaded()
Description

<a name="onreadystatechange"></a>
#onreadystatechange()
Description

<a name="user"></a>
#user()
Description

<a name="logout"></a>
#logout()
Description

<a name="fork"></a>
#fork(options)
Description

**Params**

- options   

<a name="batchDelete"></a>
#batchDelete(forkName)
Description

**Params**

- forkName   

<a name="getContents"></a>
#getContents(path)
Description

**Params**

- path   

<a name="fileCount"></a>
#fileCount(path)
Description

**Params**

- path   

<a name="getFiles"></a>
#getFiles(fileNames)
Description

**Params**

- fileNames   

<a name="doGet"></a>
#doGet(fileName)
Description

**Params**

- fileName   

<a name="renameBranch"></a>
#renameBranch(forkName)
Description

**Params**

- forkName   

<a name="createBranch"></a>
#createBranch(forkName, branchName)
Description

**Params**

- forkName   
- branchName   

<a name="postProcess"></a>
#postProcess(path, replace, repositoryName)
Description

**Params**

- path   
- replace   
- repositoryName   

<a name="serializeUser"></a>
#serializeUser(user)
Description

**Params**

- user   

<a name="setUserName"></a>
#setUserName(userName)
Description

**Params**

- userName   

<a name="setIsAdmin"></a>
#setIsAdmin(isAdmin)
Description

**Params**

- isAdmin   

<a name="setPassword"></a>
#setPassword(password)
Description

**Params**

- password   

<a name="logout"></a>
#logout()
Description

<a name="getUser"></a>
#getUser()
Description

<a name="getParams"></a>
#getParams(url, paramName)
Description

**Params**

- url   
- paramName   

<a name="onpopstate"></a>
#onpopstate()
Description

<a name="decode"></a>
#decode(s)
Description

**Params**

- s   

<a name="getUrl"></a>
#getUrl()
Description

<a name="poll"></a>
#poll(repoName, branchName)
Description

**Params**

- repoName   
- branchName   

<a name="restartPolling"></a>
#restartPolling()
Description

<a name="restart"></a>
#restart()
Description

<a name="parse"></a>
#parse(content)
Description

**Params**

- content   

<a name="create"></a>
#create(content)
Description

**Params**

- content   

<a name="getEditorContent"></a>
#getEditorContent()
Description

<a name="showContentInEditor"></a>
#showContentInEditor(editorContent)
Description

**Params**

- editorContent   

<a name="onFocus"></a>
#onFocus(e)
Description

**Params**

- e   

<a name="poll"></a>
#poll(repoName)
Description

**Params**

- repoName   

<a name="pollForImg"></a>
#pollForImg()
Description

<a name="pollForImage"></a>
#pollForImage()
Description

<a name="switch"></a>
#switch(styleName)
Description

**Params**

- styleName   

