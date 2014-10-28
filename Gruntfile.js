module.exports = function(grunt) {
     var browsers = [{
        browserName: "firefox",
        version: "19",
        platform: "XP"
    }]
    
    grunt.initConfig({
        // this is for yuidocs
        pkg: grunt.file.readJSON('package.json'),

        karma: {
            // Add a new travis ci karma configuration
            // configs here override those in our existing karma.conf.js
            unit: {
                configFile: 'tests/config/karma.conf.js',
                browsers: ['PhantomJS'],
                // This is not browser console log: https://github.com/karma-runner/karma/issues/480
                logLevel: 'INFO'
            },
            // logLevel: OFF, ERROR, WARN, INFO, DEBUG
            // used karma-spec-reporter for nice outputs
            // continuous integration mode: run tests once in PhantomJS browser.
            travis: {
                configFile: 'tests/config/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'INFO'
            }
        },
        // triggers test run when some source/test files are changed... (this is for local testing)
        watch: {
            karma: {
                files: ['tests/unit/**/*.test.js'],
                tasks: ['karma:unit:run']
            }
        },
		jsdoc : {
			dist : {
				src: ['app/js/*.js'], 
				options: {
					destination: 'assets/docs'
				}
			}
		},
		
		// jsdoc in markdown language - format suitable for github pages...
		// this uses handlebars templates
        jsdoc2md: {
			withTemplate: {
                options: {
					template: 'tests/templates/documentation.hbs'
                },
                src: "app/js/*.js",
				dest: "./_posts/documentation/"+grunt.template.today('yyyy-mm-dd')+"-documentation.md"
            }
        },
        coveralls: {
            options: {
                // LCOV coverage file relevant to every target
                src: 'tests/results/coverage/report/lcov.info',

                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                force: false
            },
            your_target: {
                // Target-specific LCOV coverage file
                src: 'tests/results/coverage/report/lcov.info'
            }
        },
        protractor: {
            saucelabs: {
                options: {
                    configFile: "tests/config/protractor.conf.js",
                    args: {
                        sauceUser: process.env.SAUCE_USERNAME,
                        sauceKey: process.env.SAUCE_ACCESS_KEY
                    }
                }
            }
        },
        connect: {
          server: {
            options: {
              hostname: 'localhost',
              port: 9999
            }
          },
          test: {
              options: {
                  hostname: 'localhost',
                  port: 9999
              }
          }
        }
    });
    
    // load all grunt npm tasks from package.json dev section
    for (var key in grunt.file.readJSON('package.json').devDependencies) {
        if (key !== 'grunt' && key.indexOf('grunt') === 0) grunt.loadNpmTasks(key);
    }

    
    // Add a new task for travis
    grunt.registerTask('devmode', ['jsdoc2md', 'karma:unit', 'watch'])
    grunt.registerTask('testLocally', ['karma:unit', 'watch'])
    grunt.registerTask('test', ['karma:travis', 'jsdoc2md', 'protractor:saucelabs'])
};