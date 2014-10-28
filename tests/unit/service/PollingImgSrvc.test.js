'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('PollingImgSrvc', function () {
        var PollingImgSrvc, $timeout, $scope;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_PollingImgSrvc_, _$timeout_, _$rootScope_) {
            PollingImgSrvc = _PollingImgSrvc_;
            $timeout = _$timeout_;
            $scope = _$rootScope_.$new();
        }));

        it('should test PollingImgSrvc', function () {
            var spyPoll = spyOn(PollingImgSrvc, 'checkReady').and.callThrough();
            var pollPromise = PollingImgSrvc.checkReady();
            var reason = "";
            pollPromise.then(function(reason) {
                console.log("success: "+reason);
            }, function(reason) {
                console.log("failed: "+reason);
                expect(reason).toBe('fn should be called with a repoName');
            });
            expect(spyPoll).toHaveBeenCalled();
            $scope.$apply();
        });
    });
});