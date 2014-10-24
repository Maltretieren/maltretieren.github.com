'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('GithubSrvc', function () {
        var GithubSrvc;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_GithubSrvc_) {
            GithubSrvc  = _GithubSrvc_;
        }));

        it('should test GithubSrvc', function () {
            expect(true).toBeTruthy()
        });
    });
});