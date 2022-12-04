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
    detailContainer.innerHTML = errorMessage("error", error);
  }
}

fetchDrink();

function createHtml(details) {
  detailContainer.innerHTML = `<a href="detail.html?id" src="${details.id}">
            <div class="card-image">
                <img src="${details.content.image}" alt="" />
            </div>
            <div class="card-title">
                ${details.title.rendered}
            </div>
        </a>`;
}
