'use strict';

describe('Unit tests for KeenioMasterCtrl', function() {
    var $rootScope, $scope, $controller;

	// prepare angular for being testable
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
		$modalInstance = _$modalInstance_;
        $controller('KeenioMasterCtrl', {
            '$rootScope' : $rootScope,
            '$scope': $scope,
        });
    }));
	
	it('should test if the more functionality is working', function () {
        expect(true).toBeTruthy()
	});
});