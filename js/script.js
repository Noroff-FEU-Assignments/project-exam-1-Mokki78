let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
 function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

/*fetch("http://localhost:10008/wp-json/wp/v2/posts/").then((data)=>{

    return data.json();

}).then((completeData)=> {
    let data1 = "url";
    completeData.map((values)=> {
        data1+=`<section class="drink-container">
        <div class="drink-item-container">
        <div class="drink-content">
        </div>
        <h1 class="title">${values.title}</h1>
        <p class="description">${values.description}</p>
        <div id="drink-content">
          <img src=${values.image} alt="image"> 
        </div>
       </div>
      </section>`

      document.getElementById("drink-container").innerHTML=data1;

    })  
  
}).catch((err)=> {
    console.log(err);

});  */

/*const container = document.querySelector(".single-container");

const url = "http://localhost:10008/wp-json/wp/v2/posts/41";

async function fetchDrink() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
    }
    
}

fetchDrink();

function createHtml(details) {
    container.innerHTML = `<h1 class="details-title">${details.title.rendered}</h1>
                            <div class="details-image" 
                                    style="background-image: url('${details.content.rendered}')"></div>
                                <div class="details-description">${details.content.rendered}</div>`;
    
    
} 

createHtml(details); */
/*const resultsContainer = document.querySelector(".results");

const urlBlog = "http://localhost:10008/wp-json/wp/v2/posts/";

async function fetchGames() {

    try {
        const response = await fetch(urlBlog);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const drinks = json.results;

        console.log(drinks)

        games.forEach(function(drink) {
            resultsContainer.innerHTML += `<a href="details.html?id=${drink.id}" class="detail">
                                                <div class="image" style="background-image: url(${drink.rendered.content_image});"></div>
                                                <div class="details">
                                                    <h4 class="name">${drink.title.rendered}</h4>                                                                                                                                                        
                                                </div>
                                            </a>`;
        });
      
    }
    catch(error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
    
}

fetchGames();
