// import "./style.css";

console.log("Hello Typescript!");

function SetNumberFunction() {
  let CurrentNumber = document.getElementById("currentNumberF");
  let ChooseNumber = document.getElementById("chosenNumber");
  if (
    Number.isInteger(ChooseNumber.valueAsNumber) &&
    ChooseNumber.valueAsNumber >= 1 &&
    ChooseNumber.valueAsNumber <= 999
  ) {
    console.log("HOla");
    CurrentNumber.innerHTML = pad(ChooseNumber.valueAsNumber, 3);
  }
}

function IncreaseNumberFunction() {
  let CurrentNumber = document.getElementById("currentNumberF");
  CurrentNumber.innerHTML = pad(Number(CurrentNumber.innerHTML) + 1, 3);
  if (CurrentNumber.innerHTML > 999) {
    CurrentNumber.innerHTML = pad(1, 3);
  }
}
function DecreaseNumberFunction() {
  let CurrentNumber = document.getElementById("currentNumberF");
  CurrentNumber.innerHTML = pad(Number(CurrentNumber.innerHTML) - 1, 3);
  if (CurrentNumber.innerHTML < 1) {
    CurrentNumber.innerHTML = pad(999, 3);
  }
}

function ResetNumberFunction() {
  let CurrentNumber = document.getElementById("currentNumberF");
  CurrentNumber.innerHTML = pad(1, 3);
}

function pad(n, length) {
  var len = length - ("" + n).length;
  // return (len > 0 ? new Array(++len).join("0") : "") + n;
  if (len > 0) {
    return new Array(++len).join("0") + n;
  } else {
    return "";
  }
}