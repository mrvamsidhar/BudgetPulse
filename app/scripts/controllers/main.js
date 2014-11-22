'use strict';

/**
 * @ngdoc function
 * @name budgetPulseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetPulseApp
 */
angular.module('budgetPulseApp')
  .controller('MainCtrl', function ($scope,transactionService) {
    $scope.transactions = transactionService.all();
  });
