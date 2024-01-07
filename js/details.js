const detailContainer = document.querySelector(".card-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "http://localhost:10008/wp-json/wp/v2/posts/" + id;

console.log(url);
async function fetchDrink() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHtml(details);
    const figure = detailContainer.querySelector("figure");
    figure.style.cursor = "pointer";
    figure.addEventListener("click", showImage);
  } catch (error) {
    detailContainer.innerHTML = "";
    console.log(error);
  }
}

fetchDrink();

function createHtml(details) {
  detailContainer.innerHTML = `<div class=card-content>
             <div class="card-title">${details.title.rendered}</div>
                <div class="card-text">${details.content.rendered}</div>`;
}

function showImage() {
  const figure = detailContainer.querySelector("figure");
  const image = figure.querySelector("img");
  image.style.display = "block";
  const imgurl = image.getAttribute("src");
  console.log(imgurl);
  window.open(
    imgurl,
    "Image",
    "width=image.stylewidth,height=image.style.height,resizable=1"
  );
}
