/*const detailContainer = document.querySelector(".single-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "http://localhost:10008/wå-json/wp/v2/posts/" + id + "?key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJtb2traS03OCIsImlhdCI6MTY2ODY3MjUyMywiZXhwIjoxODI2MzUyNTIzfQ.WHH-xSHCXTeuDzc5owX60p0r1xwdslKX1Oo3JfZNmqA";

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
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<h1>${details.title.content}</h1>
                                <div class="details-image" 
                                    style="background-image: url('${details.rendered.content_image}')"></div>
                                <div class="details-description">${details.rendered.content}</div>`;
}