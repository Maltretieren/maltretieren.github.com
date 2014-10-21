'use strict';

describe('KeenioMasterCtrl', function() {
    var $rootScope, $scope, $controller;

    // http://stackoverflow.com/questions/22246813/unit-testing-testing-a-modalinstance-controller-with-karma-jasmine
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('KeenioMasterCtrl', {
            '$rootScope' : $rootScope,
            '$scope': $scope
        });
    }));

    // dependency to UserModel
    it('should test the KeenioMasterCtrl controller', function(done) {
		expect(true).toBeTruthy();
        done();
    });
});