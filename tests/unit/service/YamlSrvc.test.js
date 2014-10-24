'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('YamlSrvc', function () {
        var YamlSrvc;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_YamlSrvc_) {
            YamlSrvc = _YamlSrvc_;
        }));

        it('should test YamlSrvc', function () {
            expect(true).toBeTruthy()
        });
    });
});