"use strict";

// Selects all the elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn-close-modal");
const btnOpenModal = document.querySelectorAll(".btn-show-modal");
const btnScrollTo = document.querySelector(".btn-scroll-to");
const section1 = document.querySelector("#section-1");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav_links");

//////////////////////////////////////////////////
// MODAL WINDOW
// Opens modal window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Closes modal window
const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Closes modal window when key down
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////////
// "LEARN MORE" BUTTON SCROLLING
btnScrollTo.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////////////
// "FEATURES" BUTTON SCROLLING
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  section1.scrollIntoView({ behavior: "smooth" });
});
