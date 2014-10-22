'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('GithubEditCtrl', function () {
        var $scope, $controller, $window, $document, input;

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_$rootScope_, _$controller_, _$window_, _$document_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
            $window = _$window_;
			$document = _$document_;
            $controller('GithubEditCtrl', {
                '$scope': $scope,
                '$window': $window
            });
        }));
		beforeEach(function() {
			// http://stackoverflow.com/questions/20313575/angular-js-unit-test-mock-document
			input = document.createElement("textarea");
			input.setAttribute('id', 'target-editor');
			var body = $document.find('body').eq(0);
			body.append(input);
		});

        it('test the save hotkey', function() {
            // this test is not working for now
            spyOn($scope, 'save');
            console.info('Simulating STRG+S hotkey inside the textarea')
			console.info(input);
			happen.once(input, {
				type: 'keypress',
				keyCode: '83',
				ctrlKey: true
			});
            //KeyEvent.simulate(19, 19)
            //expect($scope.save).toHaveBeenCalled();
        });
    });
});