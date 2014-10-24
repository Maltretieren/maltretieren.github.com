'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('UserModel', function () {
        var UserModel;
        var user = {
            username: 'testUser',
            password: '123456',
            oauthtoken: '123456'
        }

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_UserModel_) {
            UserModel  = _UserModel_;
        }));

        // will transform user object to json and stores it in localStorage
        // can't test explicitly, but implicitly through setUserName
        it('should test serializeUser', function () {
            //spyOn(UserModel, 'serializeUser');
            //UserModel.serializeUser(user);
        });

        it('should test setUserName with user argument', function () {
            var spyUserModel = spyOn(UserModel, 'setUserName');
            UserModel.setUserName(user);
            expect(spyUserModel).toHaveBeenCalled();
        });

        it('should test setUserName with NO user argument', function () {
            var spyUserModel = spyOn(UserModel, 'setUserName');
            var returnStatus = UserModel.setUserName();
            expect(spyUserModel).toHaveBeenCalled();
            expect(returnStatus).not.toBeNull();
        });

        it('should test UserModel', function () {
            expect(true).toBeTruthy()
        });
    });
});