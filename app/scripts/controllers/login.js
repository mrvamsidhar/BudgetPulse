'use strict';

/**
 * @ngdoc function
 * @name budgetPulseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetPulseApp
 */
angular.module('budgetPulseApp')
  .controller('loginController', ['$scope','$state','$rootScope', function ($scope,$state,$rootScope) {
    
    $scope.login = login;
    function login(credentials){
      if($scope.login_form.$invalid){
        console.log('Form is Invalid');
        return;
      }
      console.log(credentials);
      $rootScope.$broadcast('LOGIN_SUCCESS');
      $state.go('mainView');
    }
  }]);