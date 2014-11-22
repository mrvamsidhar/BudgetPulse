angular.module('budgetPulseApp')
  .controller('transactionAdd', ['$scope','transactionService',function ($scope,transactionService) {
	var vm = this;
	
	vm.transaction = { description:'',amount:'',date:new Date(),category:''};

	vm.add = addTransaction;

  	function addTransaction(){
  		transactionService.add(vm.transaction);
  	};
}]);