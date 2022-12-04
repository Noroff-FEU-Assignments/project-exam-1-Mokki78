const resultsContainer = document.getElementById("blog-container");

const urlBlog = "http://localhost:10008/wp-json/wp/v2/posts?_embed";

async function fetchMenu(maxDrinks = 1000) {
  try {
    const response = await fetch(urlBlog);
    const drinks = await response.json();

    console.log();

    let html = "";
    for (const drink of drinks.slice(0, maxDrinks)) {
      html += `<a href="detail-page.html?id=${drink.id}" class="blog-content">
          <div class="image" style="background-image: url(${drink.featured_image_url});"> </div>
              <h4 class="name">${drink.title.rendered}</h4>                                                                                                                                                        
  </a>`;
    }

    resultsContainer.innerHTML = html;
  } catch (error) {
    resultsContainer.innerHTML = "";
    console.log(error);
  }
}

function getMore() {
  fetchMenu(12);
}

fetchMenu(6);
