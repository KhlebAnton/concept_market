const swiperPartner = new Swiper('.swiper__img', {
    loop: false,
    
    slideToClickedSlide: true,
    slidesPerView: 'auto', // По умолчанию показываем 2 слайда
    spaceBetween: 37, // Отступ между слайдами
    breakpoints: {
       

        1000: {
            spaceBetween: 62,
        },
    },
});