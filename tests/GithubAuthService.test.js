'use strict';

describe('GithubAuthService', function() {
    var $rootScope, $scope, githubAuthService;

    // prepare angular for being testable
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function(_$rootScope_, _GithubAuthService_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $service = _GithubAuthService;
        // Mock UserModel
        UserModel = {
            getUser: function() {
                return "{'name':'Maltretieren','isAdmin':true}"
            }
        }
        $provider('GithubAuthService', {
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