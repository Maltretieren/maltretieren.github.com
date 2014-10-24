'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('PollingSrvc', function () {
        var PollingSrvc;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_PollingSrvc_) {
            PollingSrvc = _PollingSrvc_;
        }));

        it('should test PollingSrvc', function () {
            expect(true).toBeTruthy()
        });
    });
});