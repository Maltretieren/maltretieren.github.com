'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('GithubEditCtrl', function () {
        var $rootScope, $scope, $controller;

        // prepare angular for being testable
        beforeEach(angular.mock.module('myApp'));
        beforeEach(angular.mock.inject(function (_$rootScope_, _$controller_) {
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
            $controller = _$controller_;
            $controller('GithubEditCtrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
            });
        }));

        it('test the save hotkey', function() {
            spyOn($scope, 'save');
            console.info('Simulating STRG+S hotkey')
            window.crossBrowser_initKeyboardEvent("keypress", {"key": 1, "char": "s", ctrlKey: true})
            //expect($scope.save).toHaveBeenCalled();
        });
    });
});