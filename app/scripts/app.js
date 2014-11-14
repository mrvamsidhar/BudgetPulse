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
  .module('budgetPulseApp', ['ui.router','ui.bootstrap','treeGrid'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
  	$stateProvider
  		.state('loginView',{
        url: "/login",
        templateUrl: '/views/login.html',
        controller:'loginController'        
  		})
  		.state('mainView',{
        url:"/main",
        views:{
              '':{
                  templateUrl:'/views/main.html',
                  controller:'MainCtrl'
              },
              'addTransactionView@mainView':{
                  templateUrl:'/views/transaction.add.html',
                  controller:'transactionAdd as vm',
              }
        } 			
  		});
  		/*.state('/about',{
  			templateUrl: '/views/about.html'
  		})
  		.state('/contact',{
  			templateUrl: '/views/contact.html'
  		})
      .state('/addTransaction',{
        templateUrl: '/views/transaction.add.html',
        controller:'transactionAdd'
      });*/
  		$urlRouterProvider.otherwise('/loginView');
  }]);

angular.module('budgetPulseApp')
  .controller('appController', ['$scope', function ($scope) {
    console.log('Inside App controller');
    $scope.currentUserId = null;
    
  }]);