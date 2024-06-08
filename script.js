let numOne = 0;
let numTwo = 0;
let operator = "";

let inputString = "";

const buttons = document.querySelector(".buttons");
const screen = document.querySelector(".calculation")

screen.textContent = 0;

buttons.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
        let curr = event.target.textContent
        inputString += curr;

        if (curr == "C") {
            inputString = "0";
        } else if (curr == "=") {
            evaluate(inputString)
            inputString = "";
        }
        screen.textContent = inputString;
    }
});

function evaluate(equation) {
    alert(equation);
}