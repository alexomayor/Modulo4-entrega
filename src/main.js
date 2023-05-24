// import "./style.css";

console.log("Hello Typescript!");

function setNumberFunction() {
  let currentNumber = document.getElementById("currentNumberF");
  let chooseNumber = document.getElementById("chosenNumber");
  if (
    Number.isInteger(chooseNumber.valueAsNumber) &&
    chooseNumber.valueAsNumber >= 1 &&
    chooseNumber.valueAsNumber <= 99
  ) {
    console.log("HOla");
    currentNumber.innerHTML = chooseNumber.valueAsNumber;
  }
}

function increaseNumberFunction() {
  let currentNumber = document.getElementById("currentNumberF");
  currentNumber.innerHTML = Number(currentNumber.innerHTML) + 1;
  if (currentNumber.innerHTML > 99) {
    currentNumber.innerHTML = 1;
  }
}
function decreaseNumberFunction() {
  let currentNumber = document.getElementById("currentNumberF");
  currentNumber.innerHTML = Number(currentNumber.innerHTML) - 1;
  if (currentNumber.innerHTML < 1) {
    currentNumber.innerHTML = 99;
  }
}

function resetNumberFunction() {
  let currentNumber = document.getElementById("currentNumberF");
  currentNumber.innerHTML = 1;
}
