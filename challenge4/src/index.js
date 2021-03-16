const select = document.querySelector("select");

const COUNTRY = "country";

function handleSelect(event) {
  event.preventDefault();
  const currentCountry = event.target.value;
  localStorage.setItem(COUNTRY, currentCountry);
}

function displayCountry(text) {
  select.value = text;
  select.addEventListener("change", handleSelect);
}

function loadCountry() {
  const selectedCountry = localStorage.getItem(COUNTRY);
  if (selectedCountry === null) {
    select.addEventListener("change", handleSelect);
  } else {
    displayCountry(selectedCountry);
  }
}

function init() {
  loadCountry();
}

init();
