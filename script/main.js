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
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 4,
    speed: 500,
    // autoplay: { delay: 2500 },
    pagination: { el: '.sec01-item01-pagination', clickable: true }
})

const sec01Item02Slider = new Swiper('.sec01-item02', {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 4,
    speed: 500,
    // autoplay: { delay: 2500 },
    pagination: { el: '.sec01-item02-pagination', clickable: true }
})

const sec01Item03Slider = new Swiper('.sec01-item03', {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 4,
    speed: 500,
    // autoplay: { delay: 2500 },
    pagination: { el: '.sec01-item03-pagination', clickable: true }
})

console.log(window.innerWidth)

if(window.innerWidth == '744px'){
    sec01Item01Slider.slidesPerView = 3
}


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