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
    var header = document.querySelector("body > header");
    header.classList.toggle("expand");
}

var collection = document.querySelector(".collection")
function toggleModal() {
  collection.classList.toggle("modal");
}
