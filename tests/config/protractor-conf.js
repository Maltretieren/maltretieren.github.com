exports.config = {
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,

    capabilities: {
        'browserName': 'phantomjs',
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        'build': process.env.TRAVIS_BUILD_NUMBER,
        'name': 'maltretieren.github.io'
    },

    specs: ['../../tests/e2e/*.spec.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '8000')
};