'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var UrlSrvc;
		var mockGetUrl;
		
        // prepare angular for being testable
		// http://www.youtube.com/watch?v=qK-Z0oEdE4Y&feature=player_embedded
        beforeEach(module('myApp'));
        beforeEach(function () {
			// mock the function getUrl in UrlSrvc (other functions will stay intact)
			module(function ($provide) {
				$provide.value('UrlSrvc', mockGetUrl);
			});
        });
		beforeEach(inject(function (_UrlSrvc_) {
			UrlSrvc = _UrlSrvc_;
		}));

        it('should extract a param out of the browser location', function () {
            var dateTitle = UrlSrvc.parseDateTitle("_posts/2014-10-20-testing-combo.md");
            expect(dateTitle.date).toBe('2014-10-20');
            expect(dateTitle.title).toBe('testing combo');
        });

        it('should test parsing of the path variable', function () {
			mockGetUrl.getUrl = function () {
				return 'http://abc.com/edit.html?path=_posts/2014-10-20-testing-combo.md&url=/development/2014/10/20/testing-combo';
			}
		
            // this should use the mocked function
			var url = UrlSrvc.getUrl();
			console.log("url: "+url);
            var param = UrlSrvc.getParams(url, 'path');
            expect(param).toBe('_posts/2014-10-20-testing-combo.md');
        })
	});
});