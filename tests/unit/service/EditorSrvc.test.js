'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('EditorSrvc', function () {
        var EditorSrvc;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_EditorSrvc_) {
            EditorSrvc = _EditorSrvc_;
        }));

        it('should test EditorSrvc', function () {
            expect(true).toBeTruthy()
        });
    });
});