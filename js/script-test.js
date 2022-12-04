/*let slideIndex = 1;
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
} */

/*function myFunction() {
    const mobile = document.getElementById("myLinks");
    if (mobile.style.display === "block") {
      mobile.style.display = "none";
    } else {
      mobile.style.display = "block";
    }
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
/*function closeNav() {
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

const resultsContainer = document.getElementById("blog-container");

const urlBlog = "http://localhost:10008/wp-json/wp/v2/posts?_embed";

function getMore() {
  alert(document.location.search);
}

async function fetchMenu(maxDrinks = 1000) {
  try {
    const response = await fetch(urlBlog);
    const drinks = await response.json();

    let html = "";
    for (const drink of drinks) {
      console.log(drink);
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

fetchMenu(5);
