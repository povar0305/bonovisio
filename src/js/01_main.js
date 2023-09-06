
AOS.init();
console.log(AOS)
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        0: { slidesPerView: 1 },
        460: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1240: {
            slidesPerView: 2,
            spaceBetween: 42
        }
    }
});