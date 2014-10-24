'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('StylingSwitcher', function () {
        var StyleSwitcher;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_StyleSwitcher_) {
            StyleSwitcher = _StyleSwitcher_;
        }));

        it('should test StyleSwitcher', function () {
            expect(true).toBeTruthy()
        });
    });
});