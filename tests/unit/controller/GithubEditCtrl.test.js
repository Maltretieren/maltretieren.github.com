'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('GithubEditCtrl', function () {
        var $scope, $controller, $window, input;

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
		beforeEach(function() {
			input = document.createElement("textarea");
			console.info(input);
			document.getElementById("body").appendChild(input);
		}
		afterEach(function(){
			form.remove();
			form = null;
		});

        it('test the save hotkey', function() {
            // this test is not working for now
            spyOn($scope, 'save');
            console.info('Simulating STRG+S hotkey')
			console.info(input);
            //KeyEvent.simulate(19, 19)
            //expect($scope.save).toHaveBeenCalled();
        });
    });
});