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
            //inputString += curr;
            inputString = "0";
            hasOperator = false;
        } else if (curr == "=") {
            inputString += curr;
            evaluate(inputString)
            inputString = "";
            hasOperator = false;
        } else if (operators.includes(curr)) {
            if (hasOperator) {
                let chars = inputString.split("");
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

function evaluate(numOne, numTwo, operator) {
    console.log(numOne + operator + numTwo);
    return "value";
}