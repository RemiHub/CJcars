
$(document).ready(function(){
    $(window).scroll(function(){
        $('.firsty').css('opacity', 1 - 
            $(window).scrollTop() / 220);
        })
  });





addSlide();
  


  var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




//add dots dynamically underneath slideshow container
function addSlide(){
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  //check how many extra slides there are
  var totalExtra = slides.length - dots.length;
  let exit = 0;
  while(exit < slides.length){

             var newDotSpan = document.createElement("span");
            //grab the container where the orignal dots are in html
              var getDots = document.getElementById("dot-container");

              //add or append the new span tag to the dot-container 
              getDots.appendChild(newDotSpan);
          
            //add ONE additional dot class to the span tag
              newDotSpan.className += 'dot';
              var totalExtra = slides.length - dots.length;
            exit++; 
  } 
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// var slideIndex2 = 1;
// showSlides2(slideIndex2);

// // Next/previous controls
// function plusSlides2(n) {
//   showSlides2(slideIndex2 += n);
// }

// // Thumbnail image controls
// function currentSlide2(n) {
//   showSlides2(slideIndex2 = n);
// }




// function showSlides2(n) {
//   console.log(n);
//   var i;
//   var slides = document.getElementsByClassName("mySlides2");

//   if (n > slides.length) {slideIndex2 = 1}
//   if (n < 1) {slideIndex2 = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
 
//   slides[slideIndex2-1].style.display = "block";
// }





//change the text in the caption of the picture - depending on what the car is
function changeTextAuto(){
    var text = document.getElementsByClassName("text");
    var car_details = document.getElementById("details").textContent;

    for(var i = 0; i < text.length; i++){
      text[i].innerHTML = car_details;
    }    
}

changeTextAuto();



//change color of sold status
function changeColor(){
  var status = document.getElementById("status");

  if(status.innerHTML == "SOLD" || status.innerHTML == "NOW SOLD"){ // put or || 'NOW SOLD' as an option as well
    status.style.color = "green";
  } else if(status.innerHTML == "FOR SALE") {
    status.style.color = "red";
  } else {
    status.style.color = "black";
  }
}

changeColor();


