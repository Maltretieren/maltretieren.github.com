'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var UrlSrvc;
		var getUrlMock;
		
        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_UrlSrvc_, _$location_) {
            UrlSrvc  = _UrlSrvc_;
			mockDependency = {
				getUrl: function () {
					return 'http://abc.com/edit.html?path=_posts/2014-10-20-testing-combo.md&url=/development/2014/10/20/testing-combo';
				}
			};
			
			module(function ($provide) {
				$provide.value('ÚrlSrvc', getUrlMock);
			});
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