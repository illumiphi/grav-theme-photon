// collect listing articles
// var articles = document.querySelectorAll(".showcase article, .welcome article, .featured article, .index main article, .archive main article")
var articles = document.querySelectorAll(".excerpt, .showcase")

// set click event for search

articles.forEach( article => {
  if (article.dataset.url) {
    article.addEventListener("click", function(e) {
      location.href = article.dataset.url;
    })
  }
})

var header = document.querySelector("body > header");
function toggleMenu() {
    header.classList.toggle("expand");
}

var collection = document.querySelector(".collection")
function toggleCollection() {
  collection.classList.toggle("modal");
}

var gallery = document.querySelector(".gallery")
function toggleGallery() {
  gallery.classList.toggle("modal");
}

function mouseoverGalleryFigure(e) {
  gallery.style.background = 'rgba(0,0,0,.5) url(' + e.target.dataset.image + ')';
  gallery.style.backgroundSize = 'contain';
  gallery.style.backgroundRepeat = 'no-repeat';
  gallery.style.backgroundPosition = 'center';
}

var galleryFigures = document.querySelectorAll(".gallery > figure");
galleryFigures.forEach( figure => {
  // if (figure.dataset.url) {
    figure.addEventListener("click", toggleGallery );
    figure.addEventListener("mouseenter", mouseoverGalleryFigure );
  // }
})
