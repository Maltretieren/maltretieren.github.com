'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('GithubEditCtrl', function () {
        var $scope, $controller, $window, $document, $compile, input;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_$rootScope_, _$controller_, _$window_, _$document_, _$compile_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            $window = _$window_;
			$document = _$document_;
			$compile = _$compile_;
            $controller('GithubEditCtrl', {
                '$scope': $scope,
                '$window': $window
            });
			
			input = document.createElement("textarea");
			input.setAttribute('id', 'target-editor');
			var template = $compile(input)($scope);
			$scope.$digest();
        }));
		beforeEach(function() {
			// http://stackoverflow.com/questions/20313575/angular-js-unit-test-mock-document
			// http://stackoverflow.com/questions/25201673/angular-js-jquery-qtip-and-jasmine-test-case
			//input = document.createElement("textarea");
			//input.setAttribute('id', 'target-editor');
			//var template = $compile(element)(scope);
			//var body = $document.find('body').eq(0);
			//body.append(input);
		});

        it('test the save hotkey', function() {
            // this test is not working for now
            spyOn($scope, 'save');
            console.info('Simulating STRG+S hotkey inside the textarea')
			happen.once(input, {
				type: 'keypress',
				keyCode: '83',
				ctrlKey: true
			});
			console("key should be pressed");
            //KeyEvent.simulate(19, 19)
            //expect($scope.save).toHaveBeenCalled();
        });
    });
});