'use strict';

describe('TableCtrl', function() {
    var $rootScope, $scope, $controller;

    // prepare angular for being testable
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('TableCtrl', {
            '$rootScope' : $rootScope,
            '$scope': $scope,
        });
    }));

    // dependency to UserModel
    it('should test the table controller', function(done) {
		expect(true).toBeTruthy();
        done();
    });
});