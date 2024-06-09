let numOne = 0;
let numTwo = 0;
let operator = "";

let operators = ["+", "-", "*", "/"];
let hasOperator = false;
let inputString = "";

const buttons = document.querySelector(".buttons");
const screen = document.querySelector(".calculation")

screen.textContent = 0;

buttons.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
        let curr = event.target.textContent
        

        if (curr == "C") {
            inputString = "0";
            hasOperator = false;
        } else if (curr == "=") {
            inputString = evaluate(inputString);
            hasOperator = false;
        } else if (operators.includes(curr)) {
            if (hasOperator) {
                inputString = evaluate(inputString) + curr;
                hasOperator = true;
            } else {
                inputString += curr;
                hasOperator = true;
            }
        } else {
            if (inputString == "0") {
                inputString = curr;
            } else {
                inputString += curr;
            }
        }

        screen.textContent = inputString;
    }
});

function evaluate(inputString) {
    let chars = inputString.split("");
    let leftSide = "";
    let rightSide = "";
    let left = true;

    for (let i = 0; i < chars.length; i++) {
        let current = chars[i];

        if (operators.includes(current)) {
            operator = current;
            left = false;
        } else if (left) {
            leftSide += current;
        } else {
            rightSide += current;
        }
    }

    numOne = +leftSide;
    numTwo = +rightSide;

    return operate(numOne, numTwo, operator);
}

function operate(numOne, numTwo, operator) {
    if (operator == "+") {
        return (numOne + numTwo);
    } else if (operator == "-") {
        return (numOne - numTwo);
    } else if (operator == "*") {
        return (numOne * numTwo);
    } else {
        return (numOne / numTwo);
    }
}