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


//section03
const sec03Item = document.querySelectorAll('.sec03-item-wrapper > .item');

sec03Item.forEach((item) => {
    const sec03Img01 = item.lastElementChild.firstElementChild
    const sec03Img02 = item.lastElementChild.lastElementChild

    item.addEventListener('mouseenter', function () {
        sec03Img01.classList.add('on');
        sec03Img02.classList.add('on');
    })

    item.addEventListener('mouseleave', function () {
        sec03Img01.classList.remove('on');
        sec03Img02.classList.remove('on');
    })
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



//load
window.addEventListener('load', function () {
    const visualSlideNav = document.querySelector('.slide-nav-wrapper');
    const sec01Container = document.querySelector('.section01-container');

    sec01Container.classList.add('active');
    visualSlideNav.classList.add('active');
})


//scroll
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    console.log(scrollY);

    //visual
    const visualSlideNav = document.querySelector('.slide-nav-wrapper');

    if (scrollY <= 500) {
        visualSlideNav.classList.add('active');
    }
    if (scrollY >= 1000) {
        visualSlideNav.classList.remove('active');
    }


    //section01
    const sec01Container = document.querySelector('.section01-container');

    if (scrollY >= 1000) {
        sec01Container.classList.add('active');
    }
    if (scrollY >= 1300) {
        sec01Container.classList.remove('active');
    }


    //section02
    const sec02Container = document.querySelector('.section02-container');

    if (scrollY <= 400) {
        sec02Container.classList.remove('active');
    }
    if (scrollY >= 600) {
        sec02Container.classList.add('active');
    }
    if (scrollY >= 2200) {
        sec02Container.classList.remove('active');
    }


    //section03
    const sec03Bg = document.querySelector('.section03-bg');
    const sec03TitleBox = document.querySelector('.sec03-title-box');
    const sec03ItemWrapper = document.querySelector('.sec03-item-wrapper');

    if (scrollY <= 1300) {
        sec03Bg.classList.remove('active');
        sec03TitleBox.classList.remove('active');
        sec03ItemWrapper.classList.remove('active');
    }
    if (scrollY >= 1600) {
        sec03Bg.classList.add('active');
        sec03TitleBox.classList.add('active');
        sec03ItemWrapper.classList.add('active');
    }
    if (scrollY >= 3300) {
        sec03Bg.classList.remove('active');
        sec03TitleBox.classList.remove('active');
        sec03ItemWrapper.classList.remove('active');
    }


    //section04
    const sec04Container = document.querySelector('.section04-container');

    if (scrollY <= 2300) {
        sec04Container.classList.remove('active');
    }
    if (scrollY >= 2500) {
        sec04Container.classList.add('active');
    }
    if (scrollY >= 3700) {
        sec04Container.classList.remove('active');
    }


    //section05
    const sec05Bg = document.querySelector('.section05-bg');
    const sec05ImgBox = document.querySelector('.sec05-img-box');
    const sec05TextWrapper = document.querySelector('.sec05-text-wrapper');

    if (scrollY <= 2600) {
        sec05Bg.classList.remove('active');
        sec05ImgBox.classList.remove('active');
        sec05TextWrapper.classList.remove('active');
    }
    if (scrollY >= 3000) {
        sec05Bg.classList.add('active');
        sec05ImgBox.classList.add('active');
        sec05TextWrapper.classList.add('active');
    }
    if (scrollY >= 4800) {
        sec05Bg.classList.remove('active');
        sec05ImgBox.classList.remove('active');
        sec05TextWrapper.classList.remove('active');
    }


    //section06
    const sec06TitleBox = document.querySelector('.sec06-title-box');
    const sec06SlideItem01 = document.querySelector('.sec06-slide-item01');
    const sec06SlideItem02 = document.querySelector('.sec06-slide-item02');
    const sec06SlideItem03 = document.querySelector('.sec06-slide-item03');

    if (scrollY <= 3800) {
        sec06TitleBox.classList.remove('active');
        sec06SlideItem01.classList.remove('active');
        sec06SlideItem02.classList.remove('active');
        sec06SlideItem03.classList.remove('active');
    }
    if (scrollY >= 4100) {
        sec06TitleBox.classList.add('active');

        setTimeout(function () {
            sec06SlideItem01.classList.add('active');
        }, 200)

        setTimeout(function () {
            sec06SlideItem02.classList.add('active');
        }, 400)

        setTimeout(function () {
            sec06SlideItem03.classList.add('active');
        }, 600)
    }


    //section07
    const sec07Container = document.querySelector('.section07-container');

    if (scrollY <= 4600) {
        sec07Container.classList.remove('active');
    }
    if (scrollY >= 4800) {
        sec07Container.classList.add('active');
    }
})