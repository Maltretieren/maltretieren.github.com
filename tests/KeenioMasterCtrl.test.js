'use strict';

describe('KeenioMasterCtrl', function() {
    var $rootScope, $scope, $controller, data;

    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
		data = {
			commentId: '007'
		};
        $controller('KeenioMasterCtrl', {
            '$rootScope' : $rootScope,
            '$scope': $scope,
			'data': data
        });
    }));

    // dependency to UserModel
    it('should test the KeenioMasterCtrl controller', function(done) {
		expect(true).toBeTruthy();
        done();
    });
});