'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('GithubAuthService', function () {
        var githubAuthService;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_GithubAuthService_) {
            githubAuthService  = _GithubAuthService_;
        }));

        // Dependency to octokit library
        it('should test login with username/password', function () {
            var octokit = githubAuthService.instance("testUsername", "testPassword");
            expect(octokit instanceof Octokit).toBeTruthy()
        });

        it('should test to read the oauth token from localStorage', function () {
            window.localStorage.setItem("oauthToken", "123456");
            var octokit = githubAuthService.instance();
            expect(octokit instanceof Octokit).toBeTruthy();
        });
    });
});