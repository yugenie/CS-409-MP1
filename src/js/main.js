/* Your JS here. */
console.log('Hello World!')

window.onscroll = function() {onScroll()};

var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");

const navbarLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

function onScroll() {
  // Resize navbar
  ResizeNavBar();

  // Position indicator
  PositionIndicator();

}

function ResizeNavBar() {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.style.padding = "0px";
    logo.style.fontSize = "20px";
  } else {
    navbar.style.padding = "20px 0px";
    logo.style.fontSize = "30px";
  }
}

function PositionIndicator() {
  navbarLinks.forEach(link => {
    var section = document.querySelector(link.hash);
    if (window.pageYOffset + navbar.offsetHeight > section.offsetTop
      && window.pageYOffset + navbar.offsetHeight < section.offsetTop + section.offsetHeight ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    // at the bottom of the page
    navbarLinks.forEach(link => {
      link.classList.remove("active");
    });
    navbarLinks[navbarLinks.length - 1].classList.add("active");
  }
}


var slideIndex = 0;
var slides = document.getElementsByClassName("slide");
showSlides();

var prev = document.getElementById("prev");
var next = document.getElementById("next");


prev.onclick = function() {prevSlides()};
next.onclick = function() {nextSlides()};

function prevSlides() {
  if (slideIndex == 0) {
    StopVideo();
  }
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

function nextSlides() {
  if (slideIndex == 0) {
    StopVideo();
  }
  slideIndex += 1;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}


var modal = document.getElementById("my_modal");
var button = document.getElementById("modal_button");
var span = document.getElementById("close_button");

button.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var video = document.getElementById("video");

function StopVideo() {
  video.pause();
  video.currentTime = 0;
}
