//-----------------------------------MAIN_NAV-----------------------------------
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');


//-----------------------------------SLIDER_IMG---------------------------------
var slides =  document.querySelectorAll('.slider__img');
var sliderDots = document.querySelectorAll('.slider__dot');
var currentSlide = 0;
var prev = document.querySelector('.slider__control--prev');
var next = document.querySelector('.slider__control--next');
var slideInterval = setInterval(nextSlide, 4000);


//-----------------------------------FEATURES-----------------------------------
var featureControlPrev = document.querySelector('.feature-item__control--prev');
var featureControlNext = document.querySelector('.feature-item__control--next');
var featureWrapper = document.querySelector('.feature__wrapper');
var leftItem = 0;
var featureInterval = setInterval(nextItem, 6000);



//-----------------------------------REVIEWS------------------------------------
var reviewControlPrev = document.querySelector('.reviews__control--prev');
var reviewControlNext = document.querySelector('.reviews__control--next');
var reviewWrapper = document.querySelector('.reviews__wrapper');
var leftReview = 0;
var reviewInterval = setInterval(nextReview, 6000);
var width = screen.width;

window.onresize = function () {
  if (screen.width !== width) {
    leftReview = 0;
    reviewWrapper.style.left = 0;
  }
  width = screen.width;
};




//-----------------------------------REQUEST------------------------------------
var body = document.querySelector('body');
var requestMobile = document.querySelector('.request__btn');
var requestWrapper = document.querySelector('.popup-request__wrapper');
var request = document.querySelector('.info__btn');
var popup = document.querySelector('.popup-request');
var popupClose = document.querySelector('.popup-request__close');

requestMobile.onclick = function () {
  if (popup.classList.contains('popup-request--hidden')) {
    popup.classList.remove('popup-request--hidden');
    body.style.overflow = 'hidden';
  }
};

request.onclick = function () {
  if (popup.classList.contains('popup-request--hidden')) {
    popup.classList.remove('popup-request--hidden');
    body.style.overflow = 'hidden';
  }
};

popupClose.onclick = function () {
  popup.classList.add('popup-request--hidden');
  body.style.overflow = 'auto';
};

window.onclick = function (event) {
  if (event.target === popup) {
    popup.classList.add('popup-request--hidden');
    body.style.overflow = 'auto';
  }
};

//-----------------------------------DJANGO AJAX------------------------------------



//-----------------------------------MAIN_NAV-----------------------------------
navMain.classList.remove('main-nav--no-js');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});



//-----------------------------------SLIDER_IMG---------------------------------
function nextSlide() {
  goToSlide(currentSlide + 1);
}

next.onclick = function() {
  nextSlide();
};

prev.onclick = function () {
  goToSlide(currentSlide - 1);
};

function goToSlide(n) {
  clearInterval(slideInterval);
  slides[currentSlide].className = 'slider__img';
  sliderDots[currentSlide].className = 'slider__dot';
  if (n > slides.length - 1) {
    currentSlide = 0;
  }
  else if (n < 0) {
    currentSlide = slides.length - 1;
  }
  else {
    currentSlide = n;
  }
  slides[currentSlide].className = 'slider__img slider__img--show';
  sliderDots[currentSlide].className = 'slider__dot slider__dot--active';
  slideInterval = setInterval(nextSlide, 4000);
}



//-----------------------------------FEATURES-----------------------------------
function nextItem() {
  goToNextItem();
}

featureControlNext.onclick = function () {
  nextItem();
  clearInterval(featureInterval);
};

featureControlPrev.onclick = function () {
  leftItem = leftItem + 100;
  if (leftItem > 0) {
    leftItem = -200;
  }
  featureWrapper.style.left = leftItem + '%';
  clearInterval(featureInterval);
};

function goToNextItem() {
  leftItem = leftItem - 100;
  if (leftItem < -200) {
    leftItem = 0;
  }
  featureWrapper.style.left = leftItem + '%';
}

//-----------------------------------REVIEWS------------------------------------
function nextReview() {
  goToNextReview();
}

reviewControlNext.onclick = function () {
  nextReview();
  clearInterval(reviewInterval);
};

reviewControlPrev.onclick = function () {
  if (width < 768) {
    leftReview = leftReview + 100;
    if (leftReview > 0) {
      leftReview = -500;
    }
  }
  else {
    leftReview = leftReview + 1/3*100;
    if (leftReview > 0) {
      leftReview = -100;
    }
  }
  reviewWrapper.style.left = leftReview + '%';
  clearInterval(reviewInterval);
};

function goToNextReview() {
  if (width < 768) {
    leftReview = leftReview - 100;
    if (leftReview < -500) {
      leftReview = 0;
    }
  }
  else {
    leftReview = leftReview - 1/3*100;
    if (leftReview < -100) {
      leftReview = 0;
    }
  }
  reviewWrapper.style.left = leftReview + '%';
}
