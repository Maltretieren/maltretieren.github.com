module.exports = function(grunt) {
    grunt.initConfig({
        karma: {
            // Add a new travis ci karma configuration
            // configs here override those in our existing karma.conf.js
            unit: {
                configFile: 'tests/config/karma.conf.js',
				browsers: ['PhantomJS'],
                background: true
            },
			travis: {
			    configFile: 'tests/config/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
			}
        },
		// triggers test run when some source/test files are changed... (this is for local testing)
		watch: {
            karma: {
                files: ['tests/**/*.js'],
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
        }
    });
	//grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-coveralls');

    // Add a new task for travis
    //grunt.registerTask('devmode', ['karma:unit', 'watch'])
	grunt.registerTask('test', ['karma:travis'])
    grunt.registerTask('test', ['coveralls'])
};