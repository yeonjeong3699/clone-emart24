//visual-wrapper
const mainSlider = new Swiper('.slide-container', {
    loop: true,
    speed: 500,
    autoplay: { delay: 2500 },
    pagination: { el: '.pagination_fraction', type: "fraction" },
    navigation: { prevEl: '.bx-left-arrow-alt', nextEl: '.bx-right-arrow-alt' }
})

const mainPagination = new Swiper('.slide-container', {
    loop: true,
    speed: 500,
    pagination: { el: '.pagination_progressbar', type: "progressbar" }
})

mainSlider.controller.control = mainPagination;


const slidePause = document.querySelector('.bx-pause');
const slidePlay = document.querySelector('.bx-chevron-right');

slidePause.addEventListener('click', function () {
    mainSlider.autoplay.stop();
    slidePause.style.display = 'none';
    slidePlay.style.display = 'block';
})

slidePlay.addEventListener('click', function () {
    mainSlider.autoplay.start();
    slidePlay.style.display = 'none';
    slidePause.style.display = 'block';
})