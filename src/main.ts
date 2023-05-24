// import "./style.css";

console.log("Hello Typescript!");

function setNumberFunction() {
  let currentNumber = document.getElementById("currentNumberF");
  let chooseNumber = document.getElementById("chosenNumber");

  if (
    chooseNumber &&
    currentNumber &&
    currentNumber instanceof HTMLElement &&
    chooseNumber instanceof HTMLInputElement
  ) {
    let chosenValue = parseInt(chooseNumber.value);
    console.log("Check-setNumberFunction");
    currentNumber.innerHTML = `${chosenValue}`.padStart(2, `${0}`);
  }
}

function increaseNumberFunction() {
  let currentNumber = document.getElementById("currentNumberF");
  if (currentNumber && currentNumber instanceof HTMLElement) {
    currentNumber.innerHTML = `${
      Number(currentNumber?.innerHTML) + 1
    }`.padStart(2, `${0}`);
  }
}
function decreaseNumberFunction() {
  let currentNumber = document.getElementById("currentNumberF");
  if (currentNumber && currentNumber instanceof HTMLElement) {
    currentNumber.innerHTML = `${Number(currentNumber.innerHTML) - 1}`.padStart(
      2,
      `${0}`
    );
  }
}

function resetNumberFunction() {
  let currentNumber = document.getElementById("currentNumberF");
  if (currentNumber && currentNumber instanceof HTMLElement) {
    currentNumber.innerHTML = `${1}`.padStart(2, `${0}`);
  }
}
