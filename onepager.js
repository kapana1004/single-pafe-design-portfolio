

const sliderLeft = document.querySelector(".arrowLeft");
const sliderRight = document.querySelector(".arrowRight");
let imageSlide = document.querySelector(".imageCont");

console.log("sliderLeft");

sliderLeft.addEventListener("click", function(event){

    imageSlide.scrollLeft+= 570;

})

sliderRight.addEventListener("click", function(event){

    imageSlide.scrollLeft-= 570;

})