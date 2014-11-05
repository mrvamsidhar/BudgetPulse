'use strict';

/**
 * @ngdoc overview
 * @name budgetPulseApp
 * @description
 * # budgetPulseApp
 *
 * Main module of the application.
 */
angular
  .module('budgetPulseApp', ['ngRoute','ui.bootstrap','treeGrid'])
  .config(['$routeProvider', function ($routeProvider){
  	$routeProvider
  		.when('/login',{
  			templateUrl: '/views/login.html',
  			controller:'loginController'
  		})
  		.when('/main',{
  			templateUrl: '/views/main.html',
  			controller:'MainCtrl'
  		})
  		.when('/about',{
  			templateUrl: '/views/about.html'
  		})
  		.when('/contact',{
  			templateUrl: '/views/contact.html'
  		})
  		.otherwise({ redirectTo: '/login' });
  }]);

angular.module('budgetPulseApp')
  .controller('appController', ['$scope', function ($scope) {
    console.log('Inside App controller');
    $scope.currentUserId = null;
    
  }]);