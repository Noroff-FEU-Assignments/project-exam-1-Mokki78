/*const detailContainer = document.querySelector(".container");

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
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = errorMessage("error", error);
    }
    
}

fetchDrink();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="card-container">
                                 <div class="loader"></div>
                                 <div class="card-title">${details.title.rendered}</div>
                                 <div class="card-image: url(${details.image}"></div>
                                 <div class="card-content">${details.content.rendered} 
                                 </div></div>
}
/*const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

console.log(params);

const id = params.get("id");

console.log(id);

const detailContainer = document.querySelector(".card-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id); */

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
                <div>"${details.content.rendered}"</div>`;
}
