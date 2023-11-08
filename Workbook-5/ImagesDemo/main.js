"use strict";
//GET HTML ELEMENTS

const decorateButton = document.querySelector("#decorateButton");
console.log(decorateButton);
//CREATE FUNCTIONS

function decorate() {
  const paragraphs = document.querySelectorAll("p");
  for (const p of paragraphs) {
    p.style.border = "3px dashed red";
    p.style.backgroundColor = "green";
  }
  const images = document.querySelectorAll("img");
  for (const image of images) {
    image.className = "imgRounded";
  }
}

//WIRE-UP FUNCTIONS TO CREATE EVENT
decorateButton.onclick = decorate;
