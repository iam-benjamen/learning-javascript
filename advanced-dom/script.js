"use strict";

///////////////////////////////////////
// Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////
// header = document.head;
// const message = document.createElement("div");

// message.classList.add("cookie-message");
// message.innerHTML = `We use cookies for improved functionalty and analytics. <button class ="btn btn--close-cookie">Got it!</button>`;
// header.append(message);

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  // console.log("Current scroll (X/Y)", window.scrollX, scrollY);

  //OLD WAY
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth",
  // });

  //NEW WAY
  section1.scrollIntoView({ behavior: "smooth" });
});

//Page Navigation
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//Using Event Delegation
//1 Add Event listener to common parent elements
//2. Determine what element originated the event

document.querySelector(".nav__links").addEventListener("click", function (e) {
  console.log(e.target);

  //Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//Traversing the DOM
// const h1 = document.querySelector("h1");

// //Going downward: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.color = "white";
// h1.lastElementChild.style.color = "orangered";

// //Going Upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.background = ""; //closest parent elements

// //Going Sideways, selecting siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1){
//     el.style.transform = 'scale(0.5)'
//   }
// })

//Building a Tabbed Component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainers = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

//Using Event delegation
tabsContainers.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  //Guard clause
  if (!clicked) return; //to handle falsy returns, smart!

  //Active tab
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content2--active");
});
