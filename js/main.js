new WOW().init();

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
        el: ".project-pagination",
        type: "bullets",
        bulletClass: 'project-bullet',
        bulletActiveClass: 'project-bullet-active',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});