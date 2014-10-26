'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UserModel', function () {
        var UserModel;
        var userName = "testUserName";
        var store = {}

        // http://stackoverflow.com/questions/23165534/re-initialize-angularjs-in-a-test
        beforeEach(angular.mock.module('myApp'));


        beforeEach(function() {
            // LocalStorage mock.
            spyOn(localStorage, 'getItem').and.callFake(function(key) {
                return store[key];
            });
            Object.defineProperty(sessionStorage, "setItem", { writable: true });
            spyOn(localStorage, 'setItem').and.callFake(function(key, value) {
                store[key] = value;
            });
        });
        beforeEach(inject(function (_UserModel_) {
            UserModel  = _UserModel_;
        }));

        // this is done after github login to save provided credentials in localStorage (name,
        it('should test setUserName with user argument', function () {
            // UserModel.setUserName uses localStorage to store the user object
            var spyUserModel = spyOn(UserModel, 'setUserName').and.callThrough();
            UserModel.setUserName(userName);
            expect(UserModel.setUserName).toHaveBeenCalled();

            // this tests if the user is stored correctly
            expect(store.user).toEqual('{"name":"testUserName"}');
        });

        // this is not recommended :)
        it('should test setUserName with NO user argument', function () {
            var spyUserModel = spyOn(UserModel, 'setUserName');
            var returnStatus = UserModel.setUserName();
            expect(spyUserModel).toHaveBeenCalled();
            expect(returnStatus).not.toBeNull();
        });
    });
});