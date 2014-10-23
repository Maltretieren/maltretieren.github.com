'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var UrlSrvc;

        // prepare angular for being testable
        beforeEach(angular.mock.module('myApp'), function($provide){
            $provide.value('$window', {location:{href:'http://test.com/test?path=test'}});
        });
        beforeEach(inject(function (_UrlSrvc_) {
            UrlSrvc  = _UrlSrvc_;
        }));

        it('should extract a param out of the browser location', function () {
            var dateTitle = UrlSrvc.parseDateTitle("_posts/2014-10-20-testing-combo.md");
            console.log(dateTitle);
        });

        it('should test parsing of the path variable', function () {
            var param = UrlSrvc.getParams('path')
            console.log(param);
        });
    });
});