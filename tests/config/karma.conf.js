module.exports = function(config){
    config.set({
        basePath : '../../',
        files : [
		    'assets/js/labjs-2.0.3/LAB.min.js',
			'assets/js/angular-1.3.0/angular-mocks.js',
			'app/js/main.js',
            'app/version.js',
            'tests/versionSpec.js'
        ],
        autoWatch : false,
        frameworks: ['jasmine'],
        browsers : ['Chrome'],
        plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ]
    })
}