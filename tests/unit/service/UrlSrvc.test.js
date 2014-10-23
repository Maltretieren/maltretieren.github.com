'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var urlSrvc, $provide;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_UrlSrvc_, _$provide_) {
            urlSrvc = _UrlSrvc_;
			$provide = _$provide_;
        }));

        // dependency to UserModel
        it('should test if it can extract params correctly', function () {
            var url = "https://maltretieren.github.io/app/admin/edit.html?path=_posts/2014-10-20-testing-combo.md&url=/development/2014/10/20/testing-combo";
			$provide.value('$window', {location:{href:url}});
			console.log(window.location.href);
        });
    });
});