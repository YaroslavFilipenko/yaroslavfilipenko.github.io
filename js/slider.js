//slider

$(document).ready(function () {
    $('.works_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        waitForAnimate: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false,
        responsive: [
          {
            breakpoint: 1201,
            settings: {              
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    });
});