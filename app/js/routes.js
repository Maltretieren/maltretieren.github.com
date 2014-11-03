'use strict';

// ngSantinize: for confirm dialogs ->
// bootstrap-tagsinput: http://timschlechter.github.io/bootstrap-tagsinput/examples/
// cfp.hotkeys: https://github.com/chieffancypants/angular-hotkeys

/**
 * @namespace Routes
 * @description  The controller must be responsible for binding model data to views using $scope, and control information flow. It does not contain logic to fetch the data or manipulating it.
 * [ngSantinize - confirm dialogs]{@link https://github.com/m-e-conroy/angular-dialog-service}
 */

var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngSanitize', 'dialogs', 'bootstrap-tagsinput', 'ngResource', 'ui.bootstrap', 'toaster', 'cfp.hotkeys']);

myApp.config(function ($routeProvider, $locationProvider) {

	$routeProvider.when(
    	'/view1', 
    	{
    		templateUrl: '/assets/partials/partial1.html',
    		controller: 'MyCtrl1'
    	});
    $routeProvider.when(
    	'/view2', 
    	{
    		templateUrl: '/assets/partials/partial2.html',
    		controller: 'MyCtrl2'
    	});
    $routeProvider.otherwise(
        {
            redirectTo: '/view1'
        });

	// turning on html5Mode to have access to the parameters of the url
	// see also: http://johan.driessen.se/posts/Manipulating-history-with-the-HTML5-History-API-and-AngularJS
    // needed to enable because otherwise anchor links will target #/anchor and not /#anchor ...
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
