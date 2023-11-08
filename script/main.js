//visual
const mainSlider = new Swiper('.visual-slide-container', {
    loop: true,
    speed: 500,
    autoplay: { delay: 2500 },
    pagination: { el: '.visual-pagination-fraction', type: "fraction" },
    navigation: { prevEl: '.bx-left-arrow-alt', nextEl: '.bx-right-arrow-alt' }
})

const mainPagination = new Swiper('.visual-slide-container', {
    loop: true,
    speed: 500,
    pagination: { el: '.visual-pagination-progressbar', type: "progressbar" }
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


//section01
const sec01Item01Slider = new Swiper('.sec01-item01', {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 4,
    speed: 500,
    autoplay: { delay: 2500 },
    pagination: { el: '.sec01-item01-pagination', clickable: true },
    breakpoints: {
        1440: { slidesPerView: 4, spaceBetween: 2 },
        744: { slidesPerView: 3, spaceBetween: 10 }
    }
})

const sec01Item02Slider = new Swiper('.sec01-item02', {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 4,
    speed: 500,
    autoplay: { delay: 2500 },
    pagination: { el: '.sec01-item02-pagination', clickable: true },
    breakpoints: {
        1440: { slidesPerView: 4, spaceBetween: 2 },
        744: { slidesPerView: 3, spaceBetween: 10 }
    }
})

const sec01Item03Slider = new Swiper('.sec01-item03', {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 4,
    speed: 500,
    autoplay: { delay: 2500 },
    pagination: { el: '.sec01-item03-pagination', clickable: true },
    breakpoints: {
        1440: { slidesPerView: 4, spaceBetween: 2 },
        744: { slidesPerView: 3, spaceBetween: 10 }
    }
})


const categoryList = document.querySelectorAll('.category-box > li');
const sec01Item = document.querySelectorAll('.sec01-item');

let categoryNum = 0;

categoryList.forEach((item, index) => {
    item.addEventListener('click', () => {
        categoryList.forEach((e) => {
            e.classList.remove('on');
        })

        item.classList.add('on');

        categoryNum = index;
        categoryActive();
    })
})

const categoryActive = () => {
    sec01Item.forEach((item, index) => {
        item.classList.toggle('on', categoryNum == index);
    })
}

categoryActive()


//section02
const sec02Slider = new Swiper('.sec02-slide-container', {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 18,
    speed: 500,
    breakpoints: {
        1440: { slidesPerView: 4, spaceBetween: 18 },
        744: { loop: false, slidesPerView: 1.5, slidesPerGroup: 1, spaceBetween: 18, centeredSlides: true }
    }
})


//section06
const sec06Slider = new Swiper('.sec06-slide-container', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 16,
    speed: 500,
    navigation: { prevEl: '.sec06-slide-handle-left', nextEl: '.sec06-slide-handle-right' },
    breakpoints: {
        1440: { spaceBetween: 10 },
        744: { slidesPerView: 2, spaceBetween: 10, centeredSlides: true, initialSlide: 1 }
    }
})

const sec06SlideHandleLeft = document.querySelector('.sec06-slide-handle-left');
const sec06SlideHandleRight = document.querySelector('.sec06-slide-handle-right');

sec06SlideHandleLeft.addEventListener('mousedown', function () {
    sec06SlideHandleLeft.style.transform = 'scale(0.9)'
})

sec06SlideHandleLeft.addEventListener('mouseup', function () {
    sec06SlideHandleLeft.style.transform = ''
})

sec06SlideHandleRight.addEventListener('mousedown', function () {
    sec06SlideHandleRight.style.transform = 'scale(0.9)'
})

sec06SlideHandleRight.addEventListener('mouseup', function () {
    sec06SlideHandleRight.style.transform = ''
})