'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('EditorSrvc', function () {
        var EditorSrvc, $scope, $compile;
		
		function getElement() {
			// Mock the related DOM element
			var element = angular.element("<textarea id=\"target-editor\"></textarea>");
			$compile(element)($scope);
			document.body.appendChild(element[0]);
			return element;
		}
		
        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_EditorSrvc_, _$rootScope_, _$compile_) {
            EditorSrvc = _EditorSrvc_;
			$scope = _$rootScope_.$new();
			$compile = _$compile_
        }));

        it('should test EditorSrvc', function () {
            var element = getElement();
			
			var spyOpen = spyOn(EditorSrvc, 'open');
			EditorSrvc.open("TestContent");
			expect(spyOpen).toHaveBeenCalled();
			
			var spyGetContent = spyOn(EditorSrvc, 'getEditorContent');
			var content = EditorSrvc.getEditorContent();
			expect(spyOpen).toHaveBeenCalled();
			//expect(content).toBe('TestContent');
        });
    });
});