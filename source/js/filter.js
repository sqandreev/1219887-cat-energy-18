;(function() {
  "use strict";

  // variables
  var filterRangeButton = document.querySelector(".transformation__filter-button");
  var filterStateBefore = document.querySelector(".transformation__filter-state--before");
  var filterStateAfter = document.querySelector(".transformation__filter-state--after");
  var filterImageBefore = document.querySelector(".transformation__image--before");
  var filterImageAfter = document.querySelector(".transformation__image--after");
  
  filterStateBefore.addEventListener("click", function () {
    filterImageBefore.classList.remove("transformation__image--hidden");
    filterImageAfter.classList.add("transformation__image--hidden");
    filterRangeButton.setAttribute("aria-label", "Было");
    filterRangeButton.classList.remove("transformation__filter-button--after");
    filterRangeButton.classList.add("transformation__filter-button--before");
  
    filterImageBefore.classList.add("transformation__image--visible");
    filterImageBefore.classList.remove("transformation__image--invisible");
    filterImageAfter.classList.add("transformation__image--invisible");
  });
  
  filterStateAfter.addEventListener("click", function() {
    filterImageAfter.classList.remove("transformation__image--hidden");
    filterImageBefore.classList.add("transformation__image--hidden");
    filterRangeButton.setAttribute("aria-label", "Стало");
    filterRangeButton.classList.add("transformation__filter-button--after");
  
    filterImageAfter.classList.add("transformation__image--visible");
    filterImageAfter.classList.remove("transformation__image--invisible");
    filterImageBefore.classList.add("transformation__image--invisible");
  });
})();