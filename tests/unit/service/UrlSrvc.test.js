'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var UrlSrvc;
		var mockUrlSrvc = {};
		
        // prepare angular for being testable
		// http://www.youtube.com/watch?v=qK-Z0oEdE4Y&feature=player_embedded
		// howto wire up with promises: http://plnkr.co/edit/Fi1SQq?p=preview
        beforeEach(module('myApp'));
        beforeEach(function () {
			// mock the function getUrl in UrlSrvc (other functions will stay intact)
			module(function ($provide) {
				$provide.value('UrlSrvc', mockUrlSrvc);
			});
        });
		beforeEach(inject(function (_UrlSrvc_) {
			mockUrlSrvc.getUrl = function () {
				return 'http://abc.com/edit.html?path=_posts/2014-10-20-testing-combo.md&url=/development/2014/10/20/testing-combo';
			}
		}));

        it('should extract a param out of the browser location', function () {
            var dateTitle = UrlSrvc.parseDateTitle("_posts/2014-10-20-testing-combo.md");
            expect(dateTitle.date).toBe('2014-10-20');
            expect(dateTitle.title).toBe('testing combo');
        });

        it('should test parsing of the path variable', function () {
			
		
            // this should use the mocked function
			var url = UrlSrvc.getUrl();
			console.log("url: "+url);
            var param = UrlSrvc.getParams(url, 'path');
            expect(param).toBe('_posts/2014-10-20-testing-combo.md');
        })
	});
});