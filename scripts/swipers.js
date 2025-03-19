const swiperHero = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
});

const swiperProductList = document.querySelectorAll('.swiper__secondary');

swiperProductList.forEach(swiper => {
    const swiperProduct = new Swiper(swiper, {
        direction: 'horizontal',
        loop: false,
        noSwiping: true, // Включаем запрет свайпа
noSwipingClass: 'no-swipe', // Указываем класс для элементов, на которых свайп запрещён
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2, // По умолчанию показываем 2 слайда
        spaceBetween: 20, // Отступ между слайдами
        breakpoints: {
            600: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1000: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
});

const swiperInfluencer = new Swiper('.swiper__influencer', {
    direction: 'horizontal',
    loop: false,
    noSwiping: true, // Включаем запрет свайпа
    noSwipingClass: 'no-swipe', // Указываем класс для элементов, на которых свайп запрещён
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 2, // По умолчанию показываем 2 слайда
    spaceBetween: 8, // Отступ между слайдами
    breakpoints: {
        600: {
            slidesPerView: 3,

        },

        1000: {
            slidesPerView: 4,

        },
    },
});
const swiperPartner = new Swiper('.swiper__partners', {
    direction: 'horizontal',
    loop: false,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 2.5, // По умолчанию показываем 2 слайда
    spaceBetween: 8, // Отступ между слайдами
    breakpoints: {
        600: {
            slidesPerView: 4.5,

        },

        1000: {
            slidesPerView: 7,

        },
    },
});