;(function() {
  "use strict";

  var pageHeaderLogo = document.querySelector(".page-header__logo");
  var mainNav = document.querySelector(".main-nav");
  var mainNavMenu = document.querySelector(".main-nav__menu");
  var mainNavList = document.querySelector(".main-nav__list");

  pageHeaderLogo.classList.remove("page-header__logo--no-js");
  mainNav.classList.remove("main-nav--no-js");
  mainNavMenu.classList.remove("main-nav__menu--no-js");
  mainNavList.classList.remove("main-nav__list--no-js");
  mainNavMenu.classList.remove("main-nav__menu--active");
  mainNavList.classList.remove("main-nav__list--active");

  var showMenu = function() {
    mainNavMenu.classList.toggle("main-nav__menu--active");
    mainNavList.classList.toggle("main-nav__list--active");
  };
  
  mainNavMenu.addEventListener("click", showMenu);
})();