const designSwicth = document.getElementById("designSwicth");
const layoutSwitch = document.getElementById("layoutSwitch");
const layoutCarousel = document.querySelector(".layout-carousel-container");
const designCarousel = document.querySelector(".design-carousel-container");
function layoutBtnSwicth() {
  layoutSwitch.classList.add("active");
  designSwicth.classList.remove("active");
  layoutCarousel.style.display = "block";
  designCarousel.style.display = "none";
}

function designBtnSwicth() {
  designSwicth.classList.add("active");
  layoutSwitch.classList.remove("active");
  designCarousel.style.display = "block";
  layoutCarousel.style.display = "none";
}
