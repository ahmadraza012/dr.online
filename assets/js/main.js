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

function toggleClass(link, isMouseLeaveEvent) {
  var body = document.body;
  const submenu = document.getElementById("other-lg");

  if (isMouseLeaveEvent) {
    const mouseOverEvent = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    submenu.dispatchEvent(mouseOverEvent);

    submenu.addEventListener(
      "mouseleave",
      function (event) {
        if (body.classList.contains("menu-show")) {
          body.classList.remove("menu-show");
          submenu.classList.remove(
            "general",
            "sexual",
            "mens",
            "womens",
            "other"
          );
        }
      },
      {
        once: true,
      }
    );

    setTimeout(function () {
      document.addEventListener(
        "mousemove",
        function (event) {
          const rect = submenu.getBoundingClientRect();

          mouseX = event.clientX;
          mouseY = event.clientY;

          if (
            !(
              mouseX >= rect.left &&
              mouseX <= rect.right &&
              mouseY >= rect.top &&
              mouseY <= rect.bottom
            )
          ) {
            if (body.classList.contains("menu-show")) {
              body.classList.remove("menu-show");
              submenu.classList.remove(
                "general",
                "sexual",
                "mens",
                "womens",
                "other"
              );
            }
          }
        },
        { once: true }
      );
    }, 200);
  } else {
    if (!body.classList.contains("menu-show")) {
      body.classList.add("menu-show");
    }

    submenu.classList.remove("general", "sexual", "mens", "womens", "other");
  }

  var linkText = link.innerText.toLowerCase().trim();

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

function openCartDropDown(isMouseLeaveEvent) {
  const body = document.body;
  const cartEle = document.getElementById("cart");

  if (isMouseLeaveEvent) {
    const mouseOverEvent = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    cartEle.dispatchEvent(mouseOverEvent);

    cartEle.addEventListener(
      "mouseleave",
      function (event) {
        if (body.classList.contains("cart-open")) {
          body.classList.remove("cart-open");
        }
      },
      {
        once: true,
      }
    );

    setTimeout(function () {
      document.addEventListener(
        "mousemove",
        function (event) {
          const rect = cartEle.getBoundingClientRect();

          mouseX = event.clientX;
          mouseY = event.clientY;

          if (
            !(
              mouseX >= rect.left &&
              mouseX <= rect.right &&
              mouseY >= rect.top &&
              mouseY <= rect.bottom
            )
          ) {
            if (body.classList.contains("cart-open")) {
              body.classList.remove("cart-open");
            }
          }
        },
        { once: true }
      );
    }, 200);
  } else {
    body.classList.add("cart-open");
  }
}
function openLoginDropDown(isMouseLeaveEvent) {
  const body = document.body;
  const loginEle = document.getElementById("login");

  if (isMouseLeaveEvent) {
    const mouseOverEvent = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    loginEle.dispatchEvent(mouseOverEvent);

    loginEle.addEventListener(
      "mouseleave",
      function (event) {
        if (body.classList.contains("login-open")) {
          body.classList.remove("login-open");
        }
      },
      {
        once: true,
      }
    );

    setTimeout(function () {
      document.addEventListener(
        "mousemove",
        function (event) {
          const rect = loginEle.getBoundingClientRect();

          mouseX = event.clientX;
          mouseY = event.clientY;

          if (
            !(
              mouseX >= rect.left &&
              mouseX <= rect.right &&
              mouseY >= rect.top &&
              mouseY <= rect.bottom
            )
          ) {
            if (body.classList.contains("login-open")) {
              body.classList.remove("login-open");
            }
          }
        },
        { once: true }
      );
    }, 200);
  } else {
    body.classList.add("login-open");
  }
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
