$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      responsiveClass: true,
      responsive:{
        0:{
            items: 1,
            stagePadding: 10,  
        },
        600:{
            items: 2
        },
        1000:{
            items: 4
        }

    }
    });
  });

  document.getElementById("toggle-menu").addEventListener("click", displayMenu)

  function displayMenu(){
      console.log(  document.getElementsByClassName("nav-inner-wrapper"));
      document.getElementsByClassName("nav-inner-wrapper")[0].classList.toggle("nav-inner-wrapper-res")
  }