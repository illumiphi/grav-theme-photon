let currentSlide = 0

const slides = Array.from(document.querySelectorAll('.showcase > article'));
let slideCount;


if ( slides ) {

  var btn = document.createElement('button');
  var t = document.createTextNode('<');
  btn.classList.add("prev");
  _addEventListener('click', btn, prev);
  btn.appendChild(t);

  // slideContainer.insertAdjacentElement('afterbegin', btn);

  var btn = document.createElement('button');
  var t = document.createTextNode('>');
  btn.classList.add("next");
  _addEventListener('click', btn, next);
  btn.appendChild(t);

  // slideContainer.insertAdjacentElement('beforeend', btn);
}


function showSlide(num) {
  slides[currentSlide].classList.remove("show");
  currentSlide = num;
  slides[currentSlide].classList.add("show");
}

// show first slide
showSlide(currentSlide);

function prev() {
  var num = ((currentSlide - 1) % slideCount);
  showSlide(num);
}

function next() {
  var num = ((currentSlide + 1) % slideCount);
  showSlide(num);
}


setTimeout(autoNext, 5000)
function autoNext() {
  next()
  setTimeout(autoNext, 5000)
}


//////////////////////////////////////////////////////////////////////////////

var Key = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

function handleKeyboardEvent(evt) {
  if (!evt) {
    evt = window.event;
  } // for old IE compatible
  var keycode = evt.keyCode || evt.which; // also for cross-browser compatible

  console.log(keycode);

  switch (keycode) {
    case Key.LEFT:
      prev();
      break;
    case Key.UP:
      break;
    case Key.RIGHT:
      next();
      break;
    case Key.DOWN:
      break;
    default:
  }
}

function _addEventListener(evt, element, fn) {
  if (window.addEventListener) {
    element.addEventListener(evt, fn, false);
  } else {
    element.attachEvent('on' + evt, fn);
  }
}

_addEventListener('keydown', document, handleKeyboardEvent);
