
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



var slideIndex2 = [1,1];
var slideId = [
  "mySlides2", "mySlides3", "mySlides4", "mySlides5",
  "mySlides6", "mySlides7", "mySlides8", "mySlides9",
  "mySlides10", "mySlides11", "mySlides12"
]


showSlides2(1, 0);
showSlides2(2, 1);
showSlides2(3, 2);
showSlides2(4, 3);
showSlides2(5, 4);
showSlides2(6, 5);
showSlides2(7, 6);
showSlides2(8, 7);
showSlides2(9, 8);
showSlides2(10, 9);
// showSlides2(11, 10);
// showSlides2(12, 11);



function plusSlides2(n, no) {
  showSlides2(slideIndex2[no] += n, no);
}


function showSlides2(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);

  

  if (n > x.length) {slideIndex2[no] = 1}    
  if (n < 1) {slideIndex2[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex2[no]-1].style.display = "block";  
}


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

  if(status.innerHTML == "SOLD"){ // put or || 'NOW SOLD' as an option as well
    status.style.color = "green";
  } else if(status.innerHTML == "FOR SALE") {
    status.style.color = "red";
  } else {
    status.style.color = "black";
  }
}

changeColor();


const modal = document.getElementById('modal');
// const gridPic = document.getElementById('grid-item');




allowWorkingSlidesWithModal();
openModal();


// var modalPic = document.getElementById('grid-item').getElementsByTagName('img')[0].src;
// // console.log(modalPic);


// addEventListener('click', (elem)=>{
//   console.log(elem);
// })





function openModal(){

  var gridItem = document.querySelectorAll("#grid-item"); 
  var modalImgs = document.getElementById("modal-content");
  // var modalPic = document.querySelectorAll('#grid-item').querySelectorAll('img')[0].src;

  // modalPic.forEach(elem => {
  //   console.log(elem);
  // })




          //for every individual grid item clicked on open the modal
        gridItem.forEach(el => {

          // console.log(el)



          var modalImg = Array.from(el.querySelectorAll('img'));

          modalImg.forEach(item => {
            // item.src = this.src;
            item.addEventListener('click', (event) => {
              console.log(event);
              modal.style.display = "block";
              modalImgs.src = item.src;
            });
            
            
            // modal.classList.add('show-modal'));
            

            // itemImg = item.src;
            
            // console.log(item);

            
          })
         

          // modalImg.join('').addEventListener('click', () => modal.classList.add('show-modal'));



          
          // el.addEventListener('click', () => modal.classList.add('show-modal'));


       
        })
}




//if the next/previous button(s) are clicked then do not open the modal
  function allowWorkingSlidesWithModal(){

    const nextBtn = document.querySelectorAll(".next2");
    const prevBtn = document.querySelectorAll(".prev2");
    
    
    //find every time the next2 button is clicked...
    nextBtn.forEach(nextElement => {
      nextElement.addEventListener('click', (e)=>{

        e.stopPropagation();
        // specifiedClassName = e.target.className;
      })
    })

    prevBtn.forEach(prevElement => {
      prevElement.addEventListener('click', (e)=>{
        e.stopPropagation();
      })
    })

    
  }





//if the modal is open click anywhere other than the modal (i.e on the window) to remove modal
window.addEventListener('click', e => 
  e.target == modal ? modal.style.display = "none" : false
  // e.target == modal ? modal.classList.remove('show-modal') : false
  
);