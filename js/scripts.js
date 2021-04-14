var add = function(number1, number2){
    return number1 + number2;
}

var subtract = function(number1,number2){
   return number1 - number2;
}

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert("The sum of the two numbers you have enter is: " + add(number1, number2));

alert("The subtraction of the two numbers you have enter is: " + subtract(number1, number2));