'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('GithubAuthService', function () {
        var githubAuthService;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_GithubAuthService_) {
            githubAuthService = _GithubAuthService_;
        }));

        // dependency to UserModel
        it('should test userInfo', function () {
            var octokit = githubAuthService.instance("testUsername", "testPassword");
            expect(octokit instanceof Octokit).toBeTruthy()
        });
    });
});