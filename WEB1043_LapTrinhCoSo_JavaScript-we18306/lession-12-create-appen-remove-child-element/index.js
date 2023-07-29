const slideNodes = document.getElementsByClassName("slide");
let currentSlide = 1;
console.log(slideNodes[currentSlide]);
slideNodes[currentSlide].style.display = "block";
function myNext() {
  for (let i = 0; i < slideNodes.length; i++) {
    slideNodes[i].style.display = "none";
  }
  currentSlide++;
  if (currentSlide > slideNodes.length - 1) {
    currentSlide = 0;
  }
  slideNodes[currentSlide].style.display = "block";
}

function myPreview() {
  for (let i = 0; i < slideNodes.length; i++) {
    slideNodes[i].style.display = "none";
  }
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slideNodes.length - 1;
  }
  slideNodes[currentSlide].style.display = "block";
}
