(() => {
  "use strict";

  const mainNavMenu = document.querySelector(".main-nav__menu");
  const mainNavList = document.querySelector(".main-nav__list");

  const showMenu = () => {
    mainNavMenu.classList.toggle("main-nav__menu--active");
    mainNavList.classList.toggle("main-nav__list--active");
  };

  mainNavMenu.addEventListener("click", showMenu);
})();
