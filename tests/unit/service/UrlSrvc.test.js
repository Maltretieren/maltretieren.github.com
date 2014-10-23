'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var urlSrvc;

        // prepare angular for being testable
        beforeEach(angular.mock.module('myApp'));
        beforeEach(angular.mock.inject(function (_UrlSrvc_) {
            urlSrvc = _UrlSrvc_;
        }));

        // dependency to UserModel
        it('should test if it can extract params correctly', function($provide){
            $provide.value('$window', {location:{href:'dummy'}});
        });
    });
});