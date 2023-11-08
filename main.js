// Javascript for mobile
const menuBtn = document.querySelector(".header__menuBtn");
const navigationLinks = document.querySelector(".header__navigationLinks");
const closeBtn = document.querySelector(".header__closeBtn");
const mobileBackground = document.querySelector(".mobileNav__background");
const body =document.querySelector("body");
menuBtn.addEventListener("click", function () {
  navigationLinks.classList.add("header__navigationLinks--open");
  mobileBackground.classList.add("mobileNav__background--open");
  body.classList.add("body--overflow");
});
closeBtn.addEventListener("click", function () {
  navigationLinks.classList.remove("header__navigationLinks--open");
  mobileBackground.classList.remove("mobileNav__background--open");
  body.classList.remove("body--overflow");
});
