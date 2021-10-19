let execute_operators = {
    '+': function (x, y) {
        return x + y
    },
    '-': function (x, y) {
        return x - y
    },
    '*': function (x, y) {
        return x * y
    },
    '/': function (x, y) {
        return x / y
    },
    '%': function (x, y) {
        return x % y
    }
}
let canceled = false;
let allowed_operators = ['+', '-', '*', '/', '%'];
let x_array = []
let y_array = []
let operator_array = []
let results = []
while (!canceled) {
    let result = '';
    let num1 = prompt("Value of x:");
    if (num1 == null) {
        canceled = true;
        break;
    }
    let operator = prompt("Operator:");
    if (operator == null) {
        canceled = true;
        break;
    }
    if (allowed_operators.indexOf(operator) < 0) {
        result = 'Computation Error';
    }
    let num2 = prompt("Value of y:");
    if (num2 == null) {
        canceled = true;
        break;
    }
    if (!confirm('Continue?')) {
        canceled = true;
    }
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Wrong Input Number';
    }
    if (result === '') {
        result = execute_operators[operator](Number(num1), Number(num2));
    }
    x_array.push(num1)
    y_array.push(num2)
    operator_array.push(operator)
    results.push(result)
}
document.write("<table>");
document.write("<tr><th>X</th><th>Op</th><th>Y</th><th>Result</th></tr>");
for (let i = 0; i < x_array.length; i++) {
    document.write("<tr><td>" + x_array[i] + "</td><td>" + operator_array[i] + "</td><td>" +
        y_array[i] + "</td><td>" + results[i] + "</td></tr>");
}
document.write("</table><br>");

let numeric_results = results.filter(value => !isNaN(value))
let total = numeric_results.reduce((a, b) => a + b);
let average = total / numeric_results.length;
document.write("<table>");
document.write("<tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + Math.min(...numeric_results) + "</td><td>" + Math.max(...numeric_results) +
    "</td><td>" + average + "</td><td>" + total + "</td></tr>");
document.write("</table>");