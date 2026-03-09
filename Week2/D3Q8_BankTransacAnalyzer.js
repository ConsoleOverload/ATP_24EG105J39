/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/
//1. filter() all credit transactions
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
];
const creditTransactions = transactions.filter(transaction => transaction.type === "credit");
console.log('Credit Transactions:', creditTransactions);
//2. map() to extract only transaction amounts
const transactionAmounts = transactions.map(transaction => transaction.amount);
console.log('Transaction Amounts:', transactionAmounts);
//3. reduce() to calculate final account balance
const finalBalance = transactions.reduce((balance, transaction) => {
    return transaction.type === "credit" ? balance + transaction.amount : balance - transaction.amount;
}, 0);
console.log('Final Account Balance:', finalBalance);
//4. find() the first debit transaction
const firstDebit = transactions.find(transaction => transaction.type === "debit");
console.log('First Debit Transaction:', firstDebit);
//5. findIndex() of transaction with amount 10000
const indexOf10000 = transactions.findIndex(transaction => transaction.amount === 10000);
console.log('Index of transaction with amount 10000:', indexOf10000);
