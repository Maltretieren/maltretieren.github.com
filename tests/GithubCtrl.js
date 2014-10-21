'use strict';

describe('GithubCtrl', function() {
    var $rootScope, $scope, $controller, UserModel;

    // prepare angular for being testable
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        // Mock UserModel
        UserModel = {
            getUser: function() {
                return "{'name':'Maltretieren','isAdmin':true}"
            }
        }
        $controller('GithubCtrl', {
            '$rootScope' : $rootScope,
            '$scope': $scope,
            'UserModel': UserModel
        });
    }));

    // dependency to UserModel
    it('test if themes are available', function(done) {
        expect($scope.options.availableThemes.length).toBeGreaterThan(0);
        done();
    });
});