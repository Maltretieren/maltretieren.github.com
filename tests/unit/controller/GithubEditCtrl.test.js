'use strict';

// Useful resources:
// http://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed
// http://unixpapa.com/js/key.html
// http://stackoverflow.com/questions/20313575/angular-js-unit-test-mock-document
// http://stackoverflow.com/questions/25201673/angular-js-jquery-qtip-and-jasmine-test-case
// https://github.com/ccampbell/mousetrap -> http://ngmodules.org/modules/mgo-mousetrap

// group all controller tests together with outer describe
describe('Controller', function() {
    describe('GithubEditCtrl', function () {
        var $scope, $controller, $compile;

		function getElement() {
			// Mock the related DOM element
			var element = angular.element("<textarea id=\"target-editor\"></textarea>");
			$compile(element)($scope);
			document.body.appendChild(element[0]);
			return element;
		}
		
        // prepare angular for being testable
        beforeEach(module('myApp'));
		
		
		// Inject in angular constructs otherwise,
		//  you would need to inject these into each test
        beforeEach(inject(function (_$rootScope_, _$controller_, _$compile_) {
            $scope = _$rootScope_.$new();
            $controller = _$controller_;
			$compile = _$compile_
            $controller('GithubEditCtrl', {
                '$scope': $scope
            });
        }));

		// depends on happen-js defined in keypress.js
        it('should test the save hotkey (STRG+s)', function() {
            var element = getElement();
			spyOn($scope, 'save');
            console.info('Simulating STRG+s hotkey inside the textarea')
			// https://github.com/tmcw/happen
			// simulates a CTRL+s
            // works for phatomjs, but not for firefox and chrome
			happen.once(element[0], {
				type: 'keydown',
				keyCode: '83',
				ctrlKey: true
			});
            expect($scope.save).toHaveBeenCalled();
        });
    });
});