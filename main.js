// Javascript for mobile
const menuBtn = document.querySelector(".header__menuBtn");
const navigationLinks = document.querySelector(".header__navigationLinks");
const closeBtn = document.querySelector(".header__closeBtn");
menuBtn.addEventListener("click", function () {
  navigationLinks.classList.add("header__navigationLinks--open");
});
closeBtn.addEventListener("click", function () {
  navigationLinks.classList.remove("header__navigationLinks--open");
});
