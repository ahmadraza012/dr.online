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
