exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    capabilities: {
      'browserName': 'phantomjs',
      'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
      'build': process.env.TRAVIS_BUILD_NUMBER,
      'name': 'ngValidation Protractor Tests'
    },

    specs: ['tests/e2e/*.spec.js'],

    jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
    },

    baseUrl: 'http://localhost:9001/'
};