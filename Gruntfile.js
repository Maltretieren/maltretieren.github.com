module.exports = function(grunt) {
     var browsers = [{
        browserName: "firefox",
        version: "19",
        platform: "XP"
    }]
	
	grunt.initConfig({
        karma: {
            // Add a new travis ci karma configuration
            // configs here override those in our existing karma.conf.js
            unit: {
                configFile: 'tests/config/karma.conf.js',
				browsers: ['PhantomJS'],
                background: true,
				logLevel: 'DEBUG'
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
                files: ['tests/**/*Spec.js'],
                tasks: ['karma:unit:run']
            }
        },
        coveralls: {
            options: {
                // LCOV coverage file relevant to every target
                src: 'coverage/report/lcov.info',

                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                force: false
            },
            your_target: {
                // Target-specific LCOV coverage file
                src: 'coverage/report/lcov.info'
            }
        },
		protractor: {
			saucelabs: {
				options: {
					configFile: "tests/config/saucelabs.spec.conf.js",
					args: {
						sauceUser: process.env.SAUCE_USERNAME,
						sauceKey: process.env.SAUCE_ACCESS_KEY
					}
				}
			},
			your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
			  options: {
				configFile: "/tests/config/protractor-conf.js", // Target-specific config file
				args: {} // Target-specific arguments
			  }
			},
		},
		connect: {
		  server: {
			options: {
			  hostname: 'localhost',
			  port: 9999
			}
		  }
		},
		'saucelabs-jasmine': {
            all: {
                options: {
                    urls: ["http://127.0.0.1:9999/test-jasmine/SpecRunner.html"],
                    tunnelTimeout: 5,
                    build: process.env.TRAVIS_JOB_ID,
                    concurrency: 3,
                    browsers: browsers,
                    testname: "pasta tests",
                    tags: ["master"]
                }
            }
        }
    });
	
	// load all grunt npm tasks from package.json dev section
	for (var key in grunt.file.readJSON('package.json').devDependencies) {
		if (key !== 'grunt' && key.indexOf('grunt') === 0) grunt.loadNpmTasks(key);
	}

	
    // Add a new task for travis
    grunt.registerTask('devmode', ['karma:unit', 'watch'])
	grunt.registerTask('test', ['karma:travis'])
    grunt.registerTask('test', ['coveralls'])
	grunt.registerTask('test', ['connect', "saucelabs-jasmine", "protractor:saucelabs"])
};