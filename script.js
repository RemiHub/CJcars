// const header = document.getElementById('header')
// scroll = window.pageYOffset;
//     document.addEventListener('scroll', function (e) {
//         let offset = window.pageYOffset;
//         scroll = offset;
//         header.style.top = (100 + scroll) + '%';
//     });
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
              var getDots = document.getElementById("dot-container"); // .getElementsByTagName("span")[3]

              //add or append the new span tag to the dot-container 
              getDots.appendChild(newDotSpan);
          
            //add ONE additional dot class to the span tag
              newDotSpan.className += 'dot';

              var totalExtra = slides.length - dots.length;
              // console.log("total extra slides are now: " + totalExtra);

            exit++; 
  } 
}




// function addDotToSlide(){
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   var content = document.createElement("div");

//   content.appendChild = `
//   <div style="text-align:center">
//   <span class="dot" onclick="currentSlide(1)"></span>
//   </div>`;




// }

// addDotToSlide();





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


//change the text in the caption of the picture - depending on what the pic is
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

  if(status.innerHTML == "SOLD"){
    status.style.color = "green";
  } else if(status.innerHTML == "FOR SALE") {
    status.style.color = "red";
  } else {
    status.style.color = "black";
  }
}

changeColor();




// function initMap() {
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 3,
//     center: uluru,
//   });
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
// }

// function initMap(){
//   const map = new google.maps.Map(document.getElementById("map-section"), {
//     zoom: 8,
//   });
// };

// initMap();




                                   
      

  


//   function changeImage() {
//     var image = document.getElementById('cnj-logo.jpg');
//     if (image.src.match("cars2")) {
//       image.src = "cnj-logo.jpg";
//     } else {
//       image.src = "cars2.jpg";
//     }
//   }

  