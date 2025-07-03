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

document.write("----Personal budget tracker apps-----<br>");
document.write("User : " + userName +"<br>");
document.write("Total Income :" + income +"<br>");
document.write("Total expense :" + totalExpenses +"<br>");

document.write("tex deducted(10%) :" + tax +"<br>");
document.write("Net income after tex :" + netIncome +"<br>");
document.write("Remaining Balance: $" + balance +"<br>");
document.write("savings (20% of the remainnig balance) :" + savings +"<br>");


