'use strict';

// group all controller tests together with outer describe
describe('Service', function() {
    describe('StylingSwitcher', function () {
        var StyleSwitcher, $scope, $compile;

        function getElement() {
            // Mock the related DOM element
            var element = angular.element("<link rel='stylesheet' title='test'></link>");
            $compile(element)($scope);
            document.body.appendChild(element[0]);
            return element;
        }

        // prepare angular for being testable
        beforeEach(module('myApp'));
        beforeEach(inject(function (_StyleSwitcher_, _$rootScope_, _$compile_) {
            StyleSwitcher = _StyleSwitcher_;
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
        }));

        it('should test StyleSwitcher', function () {
            var element = getElement();
            var spyStyle = spyOn(StyleSwitcher, 'switch').and.callThrough();
            StyleSwitcher.switch("test");
            expect(StyleSwitcher.switch).toHaveBeenCalled();
        });
    });
});