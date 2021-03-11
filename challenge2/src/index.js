// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body");

const INITIAL_COLOR = "#eebc12";

body.style.backgroundColor = INITIAL_COLOR;

function handleWindowSize(event) {
  console.log(event.target.innerWidth);
  console.log(body.style.backgroundColor);
  if (event.target.innerWidth < 512) {
    body.style.backgroundColor = "#904fad";
  } else if (event.target.innerWidth > 512 && event.target.innerWidth < 1024) {
    body.style.backgroundColor = "#2d8ed6";
  } else {
    body.style.backgroundColor = INITIAL_COLOR;
  }
}

window.addEventListener("resize", handleWindowSize);
