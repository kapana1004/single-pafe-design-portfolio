

const sliderLeft = document.querySelector(".arrowLeft");
const sliderRight = document.querySelector(".arrowRight");
let imageSlide = document.querySelector(".imageCont");
let slidePhoto = document.querySelector(".slide1");
let photoStyle = getComputedStyle(slidePhoto);




sliderLeft.addEventListener("click", function(event){

    console.log(slidePhoto.clientWidth);

    if(slidePhoto.clientWidth < 300){

        imageSlide.scrollLeft-= 285;

        console.log(imageSlide);
    }
    else{
        imageSlide.scrollLeft-= 570;
        console.log(sliderLeft);
    }

    

  
    
    

})

sliderRight.addEventListener("click", function(event){

    if(slidePhoto.clientWidth < 300){

        imageSlide.scrollLeft+= 285;

        console.log(imageSlide);
    }
    else{
        imageSlide.scrollLeft+= 570;
        console.log(sliderLeft);
    }

   

     
    

   

})

