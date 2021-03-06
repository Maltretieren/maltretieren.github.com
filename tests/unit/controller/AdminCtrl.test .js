'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('AdminCtrl', function () {
        var $rootScope, $scope, $controller, UserModel;

        // prepare angular for being testable
        beforeEach(angular.mock.module('myApp'));
        beforeEach(angular.mock.inject(function (_$rootScope_, _$controller_) {
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();
            $controller = _$controller_;
            // Mock UserModel
            UserModel = {
                getUser: function () {
                    return "{'name':'Maltretieren','isAdmin':true}"
                }
            }
            $controller('AdminCtrl', {
                '$rootScope': $rootScope,
                '$scope': $scope,
                'UserModel': UserModel
            });
        }));

        // dependency to UserModel
        it('startup', function (done) {
            expect(true).toBeTruthy();
            done();
        });
    });
});