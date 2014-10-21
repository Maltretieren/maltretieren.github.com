'use strict';

describe('ToasterCtrl', function() {
    var $rootScope, $scope, $controller;

    // prepare angular for being testable
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('TousterCtrl', {
            '$rootScope' : $rootScope,
            '$scope': $scope,
        });
    }));

    // dependency to UserModel
    it('should test the toaster controller', function(done) {
        expect(true).toBeTruthy();
        done();
    });
});