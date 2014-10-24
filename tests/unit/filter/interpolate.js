'use strict';

// group all controller tests together with outer describe
describe('Controller', function() {
	describe('Test interploate filter', function () {
		var $filter;

		beforeEach(function () {
			module('interpolate');

			inject(function (_$filter_) {
				$filter = _$filter_;
			});
		});

		it('should capitalize a string', function () {
			// Arrange.
			//var string = 'hello world', result;
			// Act.
			//result = $filter('testFilter')(string, 'capitalize');
			// Assert.
			expect(true).toBeTruthy();
		});
	});
});