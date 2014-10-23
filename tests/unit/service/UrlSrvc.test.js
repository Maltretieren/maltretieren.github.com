'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var urlSrvc;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_UrlSrvc_) {
            urlSrvc = _UrlSrvc_;
        }));

        // dependency to UserModel
        it('should test if it can extract params correctly', function () {
            console.log(window.location.href);
        });
    });
});