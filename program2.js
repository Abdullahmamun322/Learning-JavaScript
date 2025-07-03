const userName = "Anisul islam";
const income = 5000;

//Multiple expenses

let rent = 1200;
let groceries = 600;
let transport = 600;
let entertainment = 300;

//Calculate the expenses
let totalExpenses = rent + groceries + transport + entertainment;

//The tex deduction (10% of income)
let tax = income * 0.10;

//Net income after the tex
let netIncome = income - tax;

//Calculate remaining balance
let balance  = netIncome - totalExpenses;

//savings (20% of the remainnig balance) 
let savings = balance * 0.20;

console.log.("----Personal budget tracker apps-----");
console.log("User :" + userName);
console.log("Total Income :" + income);
console.log("Total expense :" + totalExpenses);

console.log("tex deducted(10%) :" + tax);
console.log("Net income after tex :" + netIncome);
console.log("Remaining Balance: $ " + balance);
console.log("savings (20% of the remainnig balance) :" + savings);


