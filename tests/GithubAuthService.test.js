'use strict';

describe('GithubAuthService', function() {
    var $rootScope, $scope, $service;

    // prepare angular for being testable
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _$service_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $service = _$service_;
        // Mock UserModel
        UserModel = {
            getUser: function() {
                return "{'name':'Maltretieren','isAdmin':true}"
            }
        }
        $service('GithubAuthService', {
            '$rootScope' : $rootScope,
            'UserModel': UserModel
        });
    }));

    // dependency to UserModel
    it('startup', function(done) {
        expect(true).toBeTruthy();
        done();
    });
});