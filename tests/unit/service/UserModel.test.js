'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UserModel', function () {
        var UserModel = {
            setUserName: function(userName) {
                // nothing to do here
            },
            serializeUser: function(user) {
                //
            }
        };
        var user = {
            name: 'testUserName',
            isAdmin: true
        }

        // http://stackoverflow.com/questions/23165534/re-initialize-angularjs-in-a-test
        var localStorageMock;
        beforeEach(angular.mock.module('myApp'));
        beforeEach(function() {
            // Clear before every test
            localStorageMock = {
                getItem: function(key) {},
                setItem: function(key, value) {}
            };
        });
        beforeEach(module(function($provide) {
            $provide.value('$window', {
                localStorage: localStorageMock
            });
            $provide.value('UserModel', UserModel);
        }));

        // will transform user object to json and stores it in localStorage
        // can't test explicitly, but implicitly through setUserName
        it('should test serializeUser', function () {
            var spySerializeUser = spyOn(UserModel, 'serializeUser');
            UserModel.serializeUser(user);
            expect(spySerializeUser).toHaveBeenCalled();
        });

        // this is done after github login to save provided credentials in localStorage (name,
        it('should test setUserName with user argument', function () {
            var spyUserModel = spyOn(UserModel, 'setUserName');
            //var spyLocalStorage = spyOn(localStorage, 'setItem');

            UserModel.setUserName(user);
            expect(spyUserModel).toHaveBeenCalled();

            // no check if user is available in localStorage
            //var localStorage = Object.keys(localStorage);
            //expect(spyLocalStorage).toHaveBeenCalled();
            //var userLocalStorage = localStorage.getItem('user');
            //console.log("");
            //console.log(userLocalStorage);
            // expect(userLocalStorage.name).toBe('testUserName');
        });

        // this is not recommended :)
        it('should test setUserName with NO user argument', function () {
            //var spyUserModel = spyOn(UserModel, 'setUserName');
            //var returnStatus = UserModel.setUserName();
            //expect(spyUserModel).toHaveBeenCalled();
            //expect(returnStatus).not.toBeNull();
        });

        it('should test UserModel', function () {
            //expect(true).toBeTruthy()
        });
    });
});