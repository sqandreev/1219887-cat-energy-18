;(() => {
  "use strict";

  const filterRangeButton = document.querySelector(".transformation__filter-button");
  const filterStateBefore = document.querySelector(".transformation__filter-state--before");
  const filterStateAfter = document.querySelector(".transformation__filter-state--after");
  const filterImageBefore = document.querySelector(".transformation__image--before");
  const filterImageAfter = document.querySelector(".transformation__image--after");

  filterStateBefore.addEventListener("click", () => {
    filterImageBefore.classList.remove("transformation__image--hidden");
    filterImageAfter.classList.add("transformation__image--hidden");
    filterRangeButton.setAttribute("aria-label", "Было");
    filterRangeButton.classList.remove("transformation__filter-button--after");
  });

  filterStateAfter.addEventListener("click", () => {
    filterImageAfter.classList.remove("transformation__image--hidden");
    filterImageBefore.classList.add("transformation__image--hidden");
    filterRangeButton.setAttribute("aria-label", "Стало");
    filterRangeButton.classList.add("transformation__filter-button--after");
  });
})();