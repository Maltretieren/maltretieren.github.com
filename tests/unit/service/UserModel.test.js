'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UserModel', function () {
        var UserModel;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_UserModel_) {
            UserModel  = _UserModel_;
        }));

        it('should test UserModel', function () {
            expect(true).toBeTruthy()
        });
    });
});