'use strict'

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var UrlSrvc;
		var mockGetUrl = {
			getUrl: function () {
				return 'http://abc.com/edit.html?path=_posts/2014-10-20-testing-combo.md&url=/development/2014/10/20/testing-combo';
			},
			getParams: function(url, paramName) {
				return '_posts/2014-10-20-testing-combo.md'
			},
			parseDateTitle: function(url) {
				return {
					date: '2014-10-20',
					title: 'testing combo'
				}
			}
		}
		
        // prepare angular for being testable
		// http://www.youtube.com/watch?v=qK-Z0oEdE4Y&feature=player_embedded
        beforeEach(module('myApp'));
        beforeEach(	module(function ($provide) {
			$provide.value('UrlSrvc', mockGetUrl);
        }));
        beforeEach(inject(function (_UrlSrvc_) {
            UrlSrvc  = _UrlSrvc_;
        }));

		 it('should extract a param out of the browser location', function () {
            var dateTitle = UrlSrvc.parseDateTitle("_posts/2014-10-20-testing-combo.md");
            expect(dateTitle.date).toBe('2014-10-20');
            expect(dateTitle.title).toBe('testing combo');
        });


        it('should test parsing of the path variable', function () {
            var url = UrlSrvc.getUrl();
            var param = UrlSrvc.getParams(url, 'path');
            expect(param).toBe('_posts/2014-10-20-testing-combo.md');
        });
    });
});