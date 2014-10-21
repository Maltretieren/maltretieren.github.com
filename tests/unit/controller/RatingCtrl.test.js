'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('RatingCtrl', function () {
        var $rootScope, $scope, $controller;

        // prepare angular for being testable
        beforeEach(angular.mock.module('myApp'));
        beforeEach(angular.mock.inject(function (_$rootScope_, _$controller_) {
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
            $controller = _$controller_;
            $controller('RatingCtrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
            });
        }));

        it('should test the rating controller', function (done) {
            expect(true).toBeTruthy();
            done();
        });
    });
});