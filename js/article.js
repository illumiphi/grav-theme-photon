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

function toggleMenu() {
  var menu = document.querySelector("body > header > nav.main");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}

var collection = document.querySelector(".collection")
function toggleCollection() {
  collection.classList.toggle("modal");
}

var gallery = document.querySelector(".gallery")
var galleryPanel = gallery.querySelector(".panel")

function toggleGallery() {
  gallery.classList.toggle("modal");
}

function mouseoverGalleryFigure(e) {
  galleryPanel.style.background = 'white url(' + e.target.dataset.image + ')';
  galleryPanel.style.backgroundSize = 'contain';
  galleryPanel.style.backgroundRepeat = 'no-repeat';
  galleryPanel.style.backgroundPosition = 'center';
}

var galleryFigures = document.querySelectorAll(".gallery > .list > figure");
galleryFigures.forEach( figure => {
  // if (figure.dataset.url) {
    figure.addEventListener("click", toggleGallery );
    figure.addEventListener("mouseenter", mouseoverGalleryFigure );
  // }
})
