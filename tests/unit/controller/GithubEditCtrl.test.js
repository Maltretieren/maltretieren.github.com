'use strict';
		var onKeyPress = function(evt){
		  // http://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed
		  // http://unixpapa.com/js/key.html
		  evt = evt || window.event;
			var charCode = evt.keyCode || evt.which;
			console.log(charCode);
			var charStr = String.fromCharCode(charCode);
			console.log(charStr);
		}
		
// group all controller tests together with outer describe
describe('Controller', function() {
    describe('GithubEditCtrl', function () {
        var $scope, $controller, $window, $document, $compile, input;

		
		function getElement() {
			var element = angular.element("<textarea id=\"target-editor\" onkeypress=\"return onKeyPress(event)\"></textarea>");
			$compile(element)($scope);
			document.body.appendChild(element[0]);
			return element;
		  }
		
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
        }));
		beforeEach(function() {
			// http://stackoverflow.com/questions/20313575/angular-js-unit-test-mock-document
			// http://stackoverflow.com/questions/25201673/angular-js-jquery-qtip-and-jasmine-test-case
			// https://github.com/ccampbell/mousetrap -> http://ngmodules.org/modules/mgo-mousetrap
			//input = document.createElement("textarea");
			//input.setAttribute('id', 'target-editor');
			//var template = $compile(element)(scope);
			//var body = $document.find('body').eq(0);
			//body.append(input);
			 
		});

        it('test the save hotkey', function() {
            // this test is not working for now
            var element = getElement();
			spyOn($scope, 'save');
            console.info('Simulating STRG+S hotkey inside the textarea')
			//https://github.com/tmcw/happen
			console.info("1");
			happen.once(element[0], {
				type: 'keypress',
				keyCode: '83',
				ctrlKey: true
			});
			console.info("2");
			happen.once(element[0], {
				type: 'keypress',
				keyCode: '115',
				ctrlKey: true
			});
			console.info("3");
			happen.once(element[0], {
				type: 'keydown',
				keyCode: '83',
				ctrlKey: true
			});
			console.info("4");
			happen.once(element[0], {
				type: 'keyup',
				keyCode: '83',
				ctrlKey: true
			});
			console.info("key should be pressed");
            //KeyEvent.simulate(19, 19)
            //expect($scope.save).toHaveBeenCalled();
        });
    });
});