/*let num = 3.45632;
num = parseInt(num);
console.log(num.toFixed(5));

console.log(Number(false));

let firstName = "Abdullah Al";
let lastname = " Mamun";

let fullName = firstName + lastname;
console.log("The full name is " + fullName);

let text = "Bangladesh";
let len = text.length;

console.log("The number of length is " + len);

let text = prompt("Enter your name: ");
let len = text.length;

document.write("The number of length is " + text.length);

let text = "bangladesh";
document.write(text.charAt(1));

let text = "bangladesh";
text = text.toUpperCase();
document.write(text);


let text1 = "Bangladesh";
let text2 = " is a beautiful country";
let text = text1.concat(text2);
document.write(text);

let text1 = "Bangladesh";
let text = text1.slice(3, 7);
document.write(text);


//-------------------------------------------------------------------
const userName = "Abdullah Al mamun";
const income = 897.90;
const expense = 456.90;

console.log(Personal budget tracker);
console.log("User " + userName);
console.log("Total income: " + income);
console.log("Total expense: " + expense);

//--------------------------------------------------------------------
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number:");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

let sum, sub,mul,div,rem;

sum = num1 + num2;
document.write(num1 + " + " + num2 + "  =  " + sum + "<br/>");

sub = num2 - num1;
document.write(num1 + " - " + num2 + "  =  " + sub + "<br/>");

mul = num2 * num1;
document.write(num1 + " * " + num2 + "  =  " + mul + "<br/>");

div = num2 / num1;
document.write(num1 + " / " + num2 + "  =  " + div + "<br/>");

rem = num2 % num1;
document.write(num1 + " % " + num2 + "  =  " + rem );

//----------------------------------------------------------------------
let base = parseFloat(prompt("Enter Base :"));
let height = parseFloat(prompt("Enter height: "));

let area = (base * height) / 2;
document.write("Area is : " + area);

let farn = parseFloat(prompt("Enter farenheit:"));

let cels = (farn - 32) * (5/9);
document.write("Temperature is : "+ cels);*/


//------------------------------------------------------------------------
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




















