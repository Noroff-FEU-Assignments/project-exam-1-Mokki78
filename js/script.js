/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("mobileNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("mobileNav").style.width = "0%";
}

closeNav();

openNav();

/* modal image */

const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementsByClassName("myImg");
const modalImg = document.getElementById("img01");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
