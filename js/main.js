$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      margin: 10,
      dots: true,
      responsive: {
        0 : {
          items: 1,
        },
        480 : {
          items: 2,
        },
        768 : {
          items: 4,
        }
      }
    });
  });