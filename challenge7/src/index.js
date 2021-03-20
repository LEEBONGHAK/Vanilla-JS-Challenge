const result = document.querySelector(".result"),
  nums = document.querySelectorAll(".num"),
  C = document.querySelector(".C"),
  equal = document.querySelector(".equal"),
  symbols = document.querySelectorAll(".symbol");

let inputValue = "0";
let anotherInput = "";
let resultValue = 0;

function handleReset() {
  result.value = "0";
  inputValue = "0";
  anotherInput = "";
  resultValue = 0;
  nums.forEach(function (numClick) {
    numClick.removeEventListener("click", plus);
    numClick.removeEventListener("click", minus);
    numClick.removeEventListener("click", multiply);
    numClick.removeEventListener("click", division);
  });
  init();
}

function handleNumInput(event) {
  const inputNum = event.target.value;
  if (result.value === "0") {
    result.value = "";
  }
  result.value += inputNum;
  inputValue = result.value;
  console.log(inputValue);
}

function plus(event) {
  const inputNum = event.target.value;
  if (result.value !== "") {
    result.value = "";
  }
  anotherInput += inputNum;
  result.value = anotherInput;
  console.log(anotherInput);
  resultValue = Number(inputValue) + Number(anotherInput);
  inputValue = resultValue.toString();
}

function minus(event) {
  const inputNum = event.target.value;
  anotherInput += inputNum;
  result.value = anotherInput;
  resultValue = Number(inputValue) - Number(anotherInput);
  inputValue = resultValue.toString();
}

function multiply(event) {
  const inputNum = event.target.value;
  anotherInput += inputNum;
  result.value = anotherInput;
  resultValue = Number(inputValue) * Number(anotherInput);
  inputValue = resultValue.toString();
}

function division(event) {
  const inputNum = event.target.value;
  anotherInput += inputNum;
  result.value = anotherInput;
  resultValue = Number(inputValue) / Number(anotherInput);
  inputValue = resultValue.toString();
}

function afterInput(selectedSymbol) {
  if (selectedSymbol === "+") {
    nums.forEach(function (numClick) {
      numClick.addEventListener("click", plus);
    });
  } else if (selectedSymbol === "-") {
    nums.forEach(function (numClick) {
      numClick.addEventListener("click", minus);
    });
  } else if (selectedSymbol === "*") {
    nums.forEach(function (numClick) {
      numClick.addEventListener("click", multiply);
    });
  } else {
    nums.forEach(function (numClick) {
      numClick.addEventListener("click", division);
    });
  }
}

function handleSymbolClick(event) {
  const selectedSymbol = event.target.value;
  result.value = inputValue;
  nums.forEach(function (numClick) {
    numClick.removeEventListener("click", handleNumInput);
  });
  anotherInput = "";
  afterInput(selectedSymbol);
}

function displayResult() {
  result.value = inputValue;
  inputValue = "0";
  anotherInput = "";
}

function init() {
  nums.forEach(function (numClick) {
    numClick.addEventListener("click", handleNumInput);
  });
  symbols.forEach(function (symbolClick) {
    symbolClick.addEventListener("click", handleSymbolClick);
  });
  equal.addEventListener("click", displayResult);
  C.addEventListener("click", handleReset);
}

init();
