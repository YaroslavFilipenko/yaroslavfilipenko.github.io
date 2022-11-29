var swiper = new Swiper(".arrivalsSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 1
        },
    }
});

var swiper = new Swiper(".rewiewsSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper(".specialSwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 1
        },
    }
});