let swiper = new Swiper('.mySwiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
        },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
        768: {
            slidesPerView: 2
        }
    }
});