'use strict';

// group all controller tests together with outer describe
// http://www.fascinatedwithsoftware.com/blog/post/2014/05/17/how-to-test-an-asynchronous-call-made-by-an-angularjs-directive.aspx
describe('Service', function() {
    describe('PollingImgSrvc', function () {
        var PollingImgSrvc, $scope;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_PollingImgSrvc_, _$q_, _$rootScope_) {
            PollingImgSrvc = _PollingImgSrvc_;
            $scope = _$rootScope_.$new();


            var deferred = _$q_.defer();
            deferred.resolve("success");
            spyOn(PollingImgSrvc, "checkReady").and.returnValue(deferred.promise);
        }));

        it('should test PollingImgSrvc success', function () {
            PollingImgSrvc.checkReady('test').then(function() {
               console.log("successfully loaded");
            });
            $scope.$apply();
        });
    });
});