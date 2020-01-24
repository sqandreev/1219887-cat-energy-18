;(function() {
  "use strict";

  var mainNavMenu = document.querySelector(".main-nav__menu");
  var mainNavList = document.querySelector(".main-nav__list");

  mainNavMenu.classList.remove("main-nav__menu--active");
  mainNavList.classList.remove("main-nav__list--active");
  
  var showMenu = function() {
    mainNavMenu.classList.toggle("main-nav__menu--active");
    mainNavList.classList.toggle("main-nav__list--active");
  };
  
  mainNavMenu.addEventListener("click", showMenu);
})();