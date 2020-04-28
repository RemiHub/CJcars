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

                                   

  


//   function changeImage() {
//     var image = document.getElementById('cnj-logo.jpg');
//     if (image.src.match("cars2")) {
//       image.src = "cnj-logo.jpg";
//     } else {
//       image.src = "cars2.jpg";
//     }
//   }

  