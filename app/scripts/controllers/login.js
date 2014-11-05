'use strict';

/**
 * @ngdoc function
 * @name budgetPulseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetPulseApp
 */
angular.module('budgetPulseApp')
  .controller('loginController', ['$scope',function ($scope) {
    
    $scope.login = login;
    function login(credentials){
      console.log(credentials);
    }
  }]);