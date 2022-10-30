const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const searchBar = document.getElementsByClassName("search");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});

const addItem = document.querySelector("section .item");
addItem.addEventListener("click", function () {
  const ul = document.querySelector(".item ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("Add Item");

  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});
