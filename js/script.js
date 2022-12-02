/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

closeNav();

openNav();

/* modal image */

const modal = document.getElementById("myModal");

const image = document.getElementById("myImg");

const modaling = document.getElementById("img01");

image.onclick = function () {
  modal.style.display = "none";
};
const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "block";
};
