// collect listing articles
// var articles = document.querySelectorAll(".showcase article, .welcome article, .featured article, .index main article, .archive main article")
var articles = document.querySelectorAll(".excerpt")

// set click event for search

articles.forEach( article => {
  if (article.dataset.url) {
    article.addEventListener("click", function(e) {
      location.href = article.dataset.url;
    })
  }
})

var collection = document.querySelector(".collection")
function toggleCollection() {
  collection.classList.toggle("modal");
}


function toggleGallery() {
  gallery.classList.toggle("modal");
}

function mouseoverGalleryFigure(e) {
  galleryPanel.style.background = 'white url(' + e.target.dataset.image + ')';
  galleryPanel.style.backgroundSize = 'contain';
  galleryPanel.style.backgroundRepeat = 'no-repeat';
  galleryPanel.style.backgroundPosition = 'center';
}

// var gallery = document.querySelector(".gallery")
// var galleryPanel = gallery.querySelector(".panel")
// var galleryFigures = document.querySelectorAll(".gallery > .list > figure");
// galleryFigures.forEach( figure => {
  // // if (figure.dataset.url) {
    // figure.addEventListener("click", toggleGallery );
    // figure.addEventListener("mouseenter", mouseoverGalleryFigure );
  // // }
// })

function collectionExpand(event) {
  event.target.parentElement.parentElement.parentElement.classList.toggle("expand");
  console.log(event.target.checked);
  // if (event.target.checked) {
    // alert('checked');
  // } else {
    // alert('not checked');
  // }
}

var collections = document.querySelectorAll(".collection");
collections.forEach( collection => {
  var expand = collection.querySelector(".expand");
  expand.addEventListener("change", collectionExpand );
})
