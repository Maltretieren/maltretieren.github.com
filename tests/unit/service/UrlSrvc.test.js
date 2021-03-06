'use strict'

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var UrlSrvc;
		
        // prepare angular for being testable
		// http://www.youtube.com/watch?v=qK-Z0oEdE4Y&feature=player_embedded
        beforeEach(module('myApp'));
        beforeEach(inject(function (_UrlSrvc_) {
            UrlSrvc  = _UrlSrvc_;
        }));

		 it('should extract a param out of the browser location', function () {
            var dateTitle = UrlSrvc.parseDateTitle("_posts/2014-10-20-testing-combo.md");
            expect(dateTitle.date).toBe('2014-10-20');
            expect(dateTitle.title).toBe('testing combo');
        });

        it('should test parsing of the path variable', function () {
            spyOn(UrlSrvc, 'getUrl').and.returnValue('http://abc.com/edit.html?path=_posts/2014-10-20-testing-combo.md&url=/development/2014/10/20/testing-combo');
			var url = UrlSrvc.getUrl();
			expect(UrlSrvc.getUrl).toHaveBeenCalled();
            var param = UrlSrvc.getParams(url, 'path');
            expect(param).toBe('_posts/2014-10-20-testing-combo.md');
        });
    });
});