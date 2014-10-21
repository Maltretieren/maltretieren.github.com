'use strict';

describe('GithubModalCtrl', function() {
    var $rootScope, $scope, $controller, $modalInstance;

    // prepare angular for being testable
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
		$modalInstance = { // Create a mock object using spies
			close: jasmine.createSpy('modalInstance.close'),
			dismiss: jasmine.createSpy('modalInstance.dismiss'),
			result: {
				then: jasmine.createSpy('modalInstance.result.then')
			}
		}
        $controller('GithubModalCtrl', {
            '$rootScope' : $rootScope,
            '$scope': $scope,
			'$modalInstance' : $modalInstance
        });
    }));

    // dependency to UserModel
    it('test of github modal controller', function(done) {
		expect(true).toBeTruthy();
        done();
    });
});