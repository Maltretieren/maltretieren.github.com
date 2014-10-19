xmodule.exports = function(grunt) {
    grunt.initConfig({
        karma: {
            // Add a new travis ci karma configuration
            // configs here override those in our existing karma.conf.js
            travis: {
                configFile: 'tests/config/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            },
            unit: {
                configFile: 'tests/config/karma.conf.js',
                runnerPort: 9999,
                singleRun: true,
                browsers: ['PhantomJS'],
                logLevel: 'ERROR'
            }
        }
    });
	grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-coveralls');

    // Add a new task for travis
    grunt.registerTask('travis', ['karma:travis'])
};