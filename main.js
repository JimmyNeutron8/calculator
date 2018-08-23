const display = document.querySelector('#display');

let firstNumber;
let operator;
let total;

const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.op');
const eqButton = document.querySelector('#bequal');
const clearButton = document.querySelector("#clear-button");

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', (e) => {
        display.innerHTML += e.target.innerHTML;
    });
}

for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', (e) => {
        displayAmount = parseFloat(display.innerHTML);

        if (operator == undefined) {
            firstNumber = parseFloat(displayAmount);
            display.innerHTML = '';
            operator = opButtons[i].innerHTML;
        }
    });
}

eqButton.addEventListener('click', (e) => {
    displayAmount = parseFloat(display.innerHTML);
    if (operator != undefined) {
        total = operate(firstNumber, displayAmount, operator);
        operator = undefined;
        console.log(total);
        display.innerHTML = total;
    }
});

clearButton.addEventListener('click', (e) => {
    total = 0;
    firstNumber = 0;
    operator = undefined;
    display.innerHTML = '';
});

function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract (firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide (firstNum, secondNum) {
    return firstNum / secondNum;
}

function operate (firstNum, secondNum, op) {
    if (op == "+") {
        return add(firstNum, secondNum);
    }

    if (op == "-") {
        return subtract(firstNum, secondNum);
    }

    if (op == "x") {
        return multiply(firstNum, secondNum);
    }

    if (op == "/") {
        return divide(firstNum, secondNum);
    }
}