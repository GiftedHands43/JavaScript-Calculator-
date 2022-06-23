const num1 = prompt("Enter the first number");
const num2 = prompt("Enter the second number");
const operator = prompt("Enter an Operator (+, -, *, /)");
var result;

if (operator == "+") {
  result = parseInt(num1) + parseInt(num2);
} else if (operator == "-") {
  result = parseInt(num1) - parseInt(num2);
} else if (operator == "*") {
  result = num1 * num2;
} else if (operator == "/") {
  result = num1 / num2;
} else {
  alert("Invalid Operator");
}
alert("The answer is :" + result);

const askAgain = prompt("Again? (Yes or No)");

