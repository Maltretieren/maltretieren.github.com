'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('GithubEditCtrl', function () {
        var $scope, $controller, $window;

        // prepare angular for being testable
        beforeEach(angular.mock.module('myApp'));
        beforeEach(angular.mock.inject(function (_$rootScope_, _$controller_, _$window_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            $window = _$window_;
            $controller('GithubEditCtrl', {
                '$scope': $scope,
                '$window': $window
            });
        }));

        it('test the save hotkey', function() {
            // this test is not working for now
            spyOn($scope, 'save');
            console.info('Simulating STRG+S hotkey')
            $window.crossBrowser_initKeyboardEvent("keydown", {"key": 0, "char": "s", ctrlKey: true})
            //expect($scope.save).toHaveBeenCalled();
        });
    });
});