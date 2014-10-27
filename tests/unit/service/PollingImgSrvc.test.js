'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('PollingImgSrvc', function () {
        var PollingImgSrvc;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_PollingImgSrvc_) {
            PollingImgSrvc = _PollingImgSrvc_;
        }));

        it('should test PollingImgSrvc', function () {
            var spyPoll = spyOn(PollingImgSrvc, 'checkReady').and.callThrough();
            var pollPromise = PollingImgSrvc.checkReady();
            expect(spyPoll).toHaveBeenCalled();
        });
    });
});