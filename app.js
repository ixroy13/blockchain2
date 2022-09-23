let scrollDown = document.getElementById("lower");
let scrollUp = document.getElementById("upper");
let scrollEnd = document.getElementById("end");

// scrollowanie deafult

scrollDown.addEventListener("click", () => {
  window.scrollBy(0, window.innerHeight);
});

scrollUp.addEventListener("click", () => {
  window.scrollBy(0, -window.innerHeight);
});

scrollEnd.addEventListener("click", () => {
  window.scrollBy(0, 99999);
  window.scrollTo(section);
});

// dark mode

const switchButton = document.querySelector(".title button");

switchButton.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});

// scrollowanie petla

const bottomButton = document.querySelector("#lower");

const page1 = document.querySelector("#one");
const page2 = document.querySelector("#two");
const page3 = document.querySelector("#three");

let pages = [page1, page2, page3];

// bottomButton.addEventListener("click", () => {
//   for (page in pages) {

//   }
// });
