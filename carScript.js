
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






const carMake = document.querySelectorAll('#car-make'); 
let carData = [];

//go through the cars and place in array to use later
carMake.forEach(e=>{
  var carMakeType = e.innerHTML;
  const carArr = carMakeType.split(", ");
  carData.push(carArr);
})



function makeDropDown(data, filtering){

  let filteredArray = data.filter(r=>r[0] === filtering);

  // const uniqueOptions = new Set();
  // filteredArray.forEach(r=>uniqueOptions.add(r[1]));

  const uniqueList =  getUniqueValues(filteredArray, 1); //[...uniqueOptions];

  const selectedOptions = document.getElementById("car-model");

  // selectedOptions.innerHTML = "";

  // uniqueList.forEach(item=>{
  //   const option = document.createElement("option");
  //   option.textContent = item;
  //   selectedOptions.appendChild(option);
// });

  populateDropDown(selectedOptions, uniqueList);

}

// makeDropDown(carData, "BMW");

function applyDropDown(){
  let selectedOptions2 = document.getElementById("car-makes").value;
  // console.log(selectedOptions2)
  makeDropDown(carData, selectedOptions2)
}

// applyDropDown();

function afterDocLoads(){
  populateFirstDropDown();
  applyDropDown()
}

function getUniqueValues(data, index){
  
  const uniqueOptions = new Set();
  data.forEach(r=>uniqueOptions.add(r[index]));
  return [...uniqueOptions];
}

function populateFirstDropDown(){
  const uniqueList = getUniqueValues(carData,0);
  const el = document.getElementById("car-makes");
  populateDropDown(el, uniqueList);
}


function populateDropDown(el, listAsArr){
    el.innerHTML = "";

    listAsArr.forEach(item=>{
    const option = document.createElement("option");
    option.textContent = item;
    el.appendChild(option);
});
}

document.getElementById("car-makes").addEventListener("change", applyDropDown);
document.addEventListener("DOMContentLoaded", afterDocLoads);




function myFunction(){

 
  const carList = document.querySelectorAll('#car-make');
  options = [];

  
  carList.forEach(e=>{
    var words = e.innerHTML;
    options.push(words);
  })

  arrange the array to not have duplicates and in alphabetical order
  var finalArr = options;
  console.log(finalArr);


  const searchBar = document.forms["form"].querySelector('input');
  // console.log(searchBar)

  searchBar.addEventListener('keyup', function(e){
    // console.log(e.target.value)
    const term = e.target.value.toLowerCase();
    // console.log(term)
    const cars = carList.getElementsByTagName('span');
    // cars.forEach(e=>{
    //   console.log(e)
    // })
    // console.log(cars);

    Array.from(carList).forEach(function(car){
      console.log(car);
      // const make = car.firstElementChild.textContent;
      // console.log(make)
    })
  })
  

}










//find the names of car makes in showroom and add to form
function addCarMakeToForm(){

  var select = document.querySelectorAll('#car-make');
  var options = [];
  
  
  select.forEach(e=>{
    var words = e.innerHTML;
    options.push(words);
  })

  //arrange the array to not have duplicates and in alphabetical order
  var finalArr = options;
  // var uniqueArr = [...new Set(finalArr)];
  // uniqueArr.sort();


  //make a select element and append the above array
  var formBox = document.querySelector('label');
  var selectedListMake = document.createElement('select');
  selectedListMake.id = 'car-makes';
  formBox.appendChild(selectedListMake);

  //loop over the new array and append the array into the options for the select form
  for(var i =0; i < finalArr.length; i++){
    // console.log(finalArr[i]);
    var option = document.createElement("option");
    option.value = finalArr[i];
    option.textContent = finalArr[i];
    selectedListMake.appendChild(option);
    // console.log(option)
    
  }
}

// addCarMakeToForm();



function addCarModelToForm(){

  var select2 = document.querySelectorAll('#car-mode');
  var options2 = [];

  select2.forEach(e=>{
    var words2 = e.innerHTML;
    options2.push(words2);
  })

  var finalArr2 = options2;
  var uniqueArr2 = [...new Set(finalArr2)];
  uniqueArr2.sort();

  var formBox2 = document.querySelector('.car-model');
  var selectedListModel = document.createElement('select');
  selectedListModel.id = 'car-model';
  formBox2.appendChild(selectedListModel);

  
  // console.log(formBox);

  for(var i =0; i < uniqueArr2.length; i++){
    // console.log(finalArr[i]);
    var option2 = document.createElement("option");
    option2.value = uniqueArr2[i];
    option2.textContent = uniqueArr2[i];
    selectedListModel.appendChild(option2);
  }

  
}

// addCarModelToForm();







