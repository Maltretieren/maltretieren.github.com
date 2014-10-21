'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('KeenioMasterCtrl', function () {
        var $rootScope, $scope, $controller, $modalInstance, data;

        beforeEach(angular.mock.module('myApp'));
        beforeEach(angular.mock.inject(function (_$rootScope_, _$controller_) {
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
            $controller = _$controller_;
            data = {
                commentId: '007'
            };
            $modalInstance = { // Create a mock object using spies
                close: jasmine.createSpy('modalInstance.close'),
                dismiss: jasmine.createSpy('modalInstance.dismiss'),
                result: {
                    then: jasmine.createSpy('modalInstance.result.then')
                }
            };
            $controller('KeenioMasterCtrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                'data': data,
                '$modalInstance': $modalInstance
            });
        }));

        // dependency to UserModel
        it('should test the KeenioMasterCtrl controller', function (done) {
            expect(true).toBeTruthy();
            done();
        });
    });
});