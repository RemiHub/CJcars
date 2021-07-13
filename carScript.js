
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








const modal = document.getElementById('modal');


allowWorkingSlidesWithModal();
openModal();


// var modalPic = document.getElementById('grid-item').getElementsByTagName('img')[0].src;


function openModal(){

  var gridItem = document.querySelectorAll("#grid-item"); 
  var modalImgs = document.getElementById("modal-content");
  // var modalPic = document.querySelectorAll('#grid-item').querySelectorAll('img')[0].src;

      //for every individual grid item clicked on open the modal
        gridItem.forEach(el => {

          var modalImg = Array.from(el.querySelectorAll('img'));
          // console.log(el);


          modalImg.forEach(item => {
            
            item.addEventListener('click', () => {

              modal.style.display = "block";
              modal.style.zIndex = "50"; //stop clicked image overlapping modal on click
              modalImgs.src = item.src;
            });
          
          })
          
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
