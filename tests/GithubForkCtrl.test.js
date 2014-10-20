'use strict';

describe('Unit tests for GithubForkCtrl', function() {
    var $rootScope, $scope, $controller;

    // prepare angular for being testable
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        $controller('GithubForkCtrl', {
            '$rootScope' : $rootScope,
            '$scope': $scope
        });
    }));

    // this has a dependency to config.js
    it('look at available themes'), function() {
        console.log($scope.options.availableThemes);
    }
});