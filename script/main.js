//visual-wrapper
const mainSlider = new Swiper('.visual-slide-container', {
    loop: true,
    speed: 500,
    autoplay: { delay: 2500 },
    pagination: { el: '.pagination_fraction', type: "fraction" },
    navigation: { prevEl: '.bx-left-arrow-alt', nextEl: '.bx-right-arrow-alt' }
})

const mainPagination = new Swiper('.visual-slide-container', {
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

//section01-wrapper
const sec01Slider = new Swiper('.sec01-slide-container', {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 18,
    speed: 500,
    // autoplay: { delay: 2500 },
    pagination: { el: '.swiper-pagination', clickable: true }
})