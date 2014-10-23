'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UrlSrvc', function () {
        var UrlSrvc;
		var $provide;

        // prepare angular for being testable
        beforeEach(('myApp'));
        beforeEach(inject(function (_UrlSrvc_, _$provide_) {
            UrlSrvc = _UrlSrvc_;
			$provide = _$provide_;
        }));

        // dependency to UserModel
        it('should test if it can extract params correctly', function($provide){
            $provide.value('$window', {location:{href:'dummy'}});
        });
    });
});