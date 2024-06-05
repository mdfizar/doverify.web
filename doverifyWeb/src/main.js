// service slider ==========
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  spaceBetween: 10,
  centeredSlides:true,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      maxRatio: 2,
    },
    668: {
      slidesPerView:5,
      spaceBetween: 10,
    },
  },
}); 

// explore sllider========= 
  var itemOne = document.getElementById("f-item");
  var itemTo = document.getElementById("s-item");
  var itemThard = document.getElementById("l-item");
  itemOne.style.display ="block";
  function heidSlide() {
    if (itemOne.style.display === "block") {
        itemOne.style.display ="none";
        itemTo.style.display ="block";
    } else {
        itemOne.style.display ="block";
        itemTo.style.display ="none";
        itemThard.style.display ="none";
    }
  }
  function heidSlides() {
    if (itemThard.style.display === "none") {
        itemOne.style.display = "none";
        itemThard.style.display ="block";
        itemTo.style.display = "none";
    } else {
        itemThard.style.display ="none";
        itemTo.style.display ="block"
        
    }
  }
  // aos animation =====
  AOS.init();
  
// explore slider  2 ==============
// document.addEventListener('DOMContentLoaded', function() {
//   const slides = document.querySelectorAll('.slide');
//   const paginations = document.querySelectorAll('.pagination');

//   function handleSlider(index) {
//       slides.forEach((slide, i) => {
//           if (i === index) {
//               slide.classList.add('active');
//           } else {
//               slide.classList.remove('active');
//           }
//       });

//       paginations.forEach((pagination, i) => {
//           if (i === index) {
//               pagination.classList.add('active');
//           } else {
//               pagination.classList.remove('active');
//           }
//       });
//   }

  // Add click event listeners to pagination links
//   paginations.forEach((pagination, index) => {
//       pagination.addEventListener('click', function(event) {
//           event.preventDefault();
//           handleSlider(index);
//       });
//   });

//   // Set initial active pagination
//   paginations[0].classList.add('active');
// });

var firstSlide = document.getElementById("first-slide");
var scondSlide = document.getElementById("second-slide")
var thridSlide = document.getElementById("third-slide")

 function handleSlider() {
  if(firstSlide.style.display === "block") {
    firstSlide.style.display ="none";
    scondSlide.style.display ="block";
  } else{
    console.log("err");
  }
 }
