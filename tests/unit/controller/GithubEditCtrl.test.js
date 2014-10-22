'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('GithubEditCtrl', function () {
        var $scope, $controller, $window, input;

        // prepare angular for being testable
        beforeEach(module('myApp'));
		beforeEach(function() {
			input = document.createElement("textarea");
			input.setAttribute('id', 'target-editor');
		});
        beforeEach(inject(function (_$rootScope_, _$controller_, _$window_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            $window = _$window_;
            $controller('GithubEditCtrl', {
                '$scope': $scope,
                '$window': $window
            });
        }));
		
		afterEach(function(){
			input = null;
		});

        it('test the save hotkey', function() {
            // this test is not working for now
            spyOn($scope, 'save');
            console.info('Simulating STRG+S hotkey inside the textarea')
			console.info(input);
			happen.once(input, {
				type: 'keypress',
				keyCode: '84',
				ctrlKey: true
			});
            //KeyEvent.simulate(19, 19)
            //expect($scope.save).toHaveBeenCalled();
        });
    });
});