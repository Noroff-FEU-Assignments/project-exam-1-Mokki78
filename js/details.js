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
  } catch (error) {
    resultsContainer.innerHTML = "";
    console.log(error);
  }
}

fetchDrink();

function createHtml(details) {
  detailContainer.innerHTML = `<div class=card-content>
             <div class="card-title">${details.title.rendered}</div>
                <div class="card-text">"${details.content.rendered}"</div>`;
}
