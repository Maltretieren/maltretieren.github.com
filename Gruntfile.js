module.exports = function(grunt) {
    grunt.initConfig({
        karma: {
            // Add a new travis ci karma configuration
            // configs here override those in our existing karma.conf.js
            travis: {
                configFile: 'tests/config/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            },
            coveralls: {
                options: {
                    // LCOV coverage file relevant to every target
                    src: 'coverage/reports/lcov.info',

                    // When true, grunt-coveralls will only print a warning rather than
                    // an error, to prevent CI builds from failing unnecessarily (e.g. if
                    // coveralls.io is down). Optional, defaults to false.
                    force: false
                },
                your_target: {
                    // Target-specific LCOV coverage file
                    src: 'coverage/report/extra-results-*.info'
                },
            }
        }
    });
	grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-coveralls');

    // Add a new task for travis
    grunt.registerTask('test', ['karma:travis'])
};