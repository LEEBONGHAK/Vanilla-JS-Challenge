const h2 = document.querySelector("h2"),
  range = document.querySelector(".range"),
  input = document.querySelector(".guess-num"),
  button = document.querySelector("button"),
  confirm = document.querySelector(".confirm"),
  result = document.querySelector(".result");

function displayH2() {
  h2.innerText = `Generate a number between 0 and ${range.value}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const choseNum = Number(input.value);
  const randNum = Math.floor(Math.random() * range.value);
  confirm.innerText = `You chose: ${choseNum}, the machine chose: ${randNum}.`;
  if (choseNum === randNum) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

function init() {
  range.addEventListener("change", displayH2);
  button.addEventListener("click", handleSubmit);
}

init();
