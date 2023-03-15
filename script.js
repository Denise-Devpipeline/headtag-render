// Homework 3/14/2023 -> Due Tomorrow

// Make a function that will dynamically create an html heading tag.
//  - NOTE: Valid headings are only 1-6
// input: size, text
// output: HTMLH<whatever>Element {}

// Then, make a render function that will an element, and append it in a particular location on the dom.
// input: el, parentEl (what element do we append to?)
// output: renders element on screen. void
// */

const userInput = document.getElementById("root");
const paraOneDiv = document.querySelector(".size-wrapper");
const paraTwoDiv = document.querySelector(".font-wrapper");
const paraThreeDiv = document.querySelector(".move-wrapper");

const fontText = document.createTextNode("FONT");
const sizeText = document.createTextNode("SIZE");

function junction() {
  const font = document.createElement(".move-wrapper");
  const changeFont = document.createChangeFont("SIZE");
  font.appendChild(changeFont);
}

// const button = document.querySelector("p");

// div.appendChild(fontText);
// fontText.appendChild(sizeText);

// userInput.appendChild(div);

setTimeout(() => {
  div.remove();

  paraOneDiv.appendChild(div);
  paraThreeDiv.classList.add = "blue";
  paraOneDiv.style.color = "blue";
}, 3000);

console.log(div);

// setTimeout(() => {
//   firstChildDiv.classList.add("red");
//   firstChildDiv.classList.remove("remove-stuff");
//   firstChildDiv.classList.toggle("hide");

//   if (firstChildDiv.classList.includes("hide")) {
//     firstChildDiv.classList.remove("hide");
//   } else {
//     firstChildDiv.classList.add("hide");
//   }
// }, 3000);
