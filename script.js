let numOne = 0;
let numTwo = 0;
let operator = "";

let inputString = "";

const buttons = document.querySelector(".buttons");
const screen = document.querySelector(".calculation")

buttons.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
        let curr = event.target.textContent
        inputString += curr;

        if (curr == "C") {
            inputString = "";
        } else if (curr == "=") {
            evaluate(inputString)
            inputString = "";
        }
        console.log(inputString);
    }
});

function evaluate(equation) {
    alert("evaluate");
}