const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("header.header nav");

menuBtn.addEventListener("click", function () {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
});
