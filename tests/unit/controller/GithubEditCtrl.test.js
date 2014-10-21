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

        it('should test the github edit controller', function (done) {
            var triggerHotkeySave = function (element, keyCode) {
                var e = $angular.element.Event('ctrl+s');
                e.which = keyCode;
                element.trigger(e);
            };
            spyOn($scope, 'save');
            triggerHotkeySave
            expect($scope.save).toHaveBeenCalled();
        });
    });
});