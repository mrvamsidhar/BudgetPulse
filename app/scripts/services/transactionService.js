angular.module('budgetPulseApp')
.service('transactionService', function () {
	var self =this;

	self.transactions = [
	 			{"description":"Grocery","amount":"100","date":"2014-11-22","category":"General Expenses"},
	 			{"description":"Utility","amount":"100","date":"2014-11-22","category":"Fixed Expenses"},
	 			{"description":"Grocery","amount":"100","date":"2014-11-22","category":"General Expenses"},
	 			{"description":"Utility","amount":"100","date":"2014-11-22","category":"Fixed Expenses"},
	 			{"description":"Grocery","amount":"100","date":"2014-11-22","category":"General Expenses"},
	 			{"description":"Utility","amount":"100","date":"2014-11-22","category":"Fixed Expenses"},
	 			{"description":"Grocery","amount":"100","date":"2014-11-22","category":"General Expenses"},
	 			{"description":"Utility","amount":"100","date":"2014-11-22","category":"Fixed Expenses"}	 			
	 			];

	function addTransaction(transaction){
		self.transactions.push(angular.copy(transaction));
	}

	function allTransactions(){
		return self.transactions;
	}

	function deleteTransaction(){

	}

	function removeTransaction(){
		
	}
	return{
		add:addTransaction,
		all:allTransactions,
		delete:removeTransaction
	}
});