angular.module('budgetPulseApp')
.service('transactionService', function () {
	var self =this;

	self.transactions = [];

	function addTransaction(transaction){
		self.transactions.push(transaction);
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