document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header");
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => (headerContainer.innerHTML = data));

  const footerContainer = document.getElementById("footer");
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => (footerContainer.innerHTML = data));
});

// // menu function for add or remove class
// function toggleClass() {
//   var body = document.body;
//   body.classList.toggle("show");
// }
function toggleClass(link) {
  var body = document.body;
  body.classList.toggle("menu-show");

  const submenu = document.getElementById("other-lg");

  submenu.classList.remove("general", "sexual", "mens", "womens", "other");

  var linkText = link.innerText.toLowerCase().trim();
  console.log(linkText);
  // debugger;
  switch (linkText) {
    case "general health":
      submenu.classList.add("general");
      break;
    case "sexual health":
      submenu.classList.add("sexual");
      break;
    case "men's health":
      submenu.classList.add("mens");
      break;
    case "women's health":
      submenu.classList.add("womens");
      break;
    case "other health":
      submenu.classList.add("other");
      break;
    default:
      break;
  }
}

function openCartDropDown() {
  var body = document.body;
  body.classList.toggle("cart-open");
}
function openSubNav() {
  var body = document.body;
  body.classList.toggle("openSubNav");
}

// timer javascript
function startTimer() {
  var hoursDisplay = document.getElementById("hours");
  var minutesDisplay = document.getElementById("minutes");
  var secondsDisplay = document.getElementById("seconds");

  var hours = 0;
  var minutes = 0;
  var seconds = 0;

  setInterval(function () {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    hoursDisplay.textContent = (hours < 10 ? "0" : "") + hours;
    minutesDisplay.textContent = (minutes < 10 ? "0" : "") + minutes;
    secondsDisplay.textContent = (seconds < 10 ? "0" : "") + seconds;
  }, 1000);
}

window.onload = startTimer;
