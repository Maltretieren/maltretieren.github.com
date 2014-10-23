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
        it('should test if it can extract params correctly', function ($provide, $window) {
            var url = "https://maltretieren.github.io/app/admin/edit.html?path=_posts/2014-10-20-testing-combo.md&url=/development/2014/10/20/testing-combo";
			$provide.value('$window', {location:{href:'test'}});
			console.log(window.location.href);
        });
    });
});