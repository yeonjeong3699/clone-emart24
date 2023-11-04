const headerTop = document.querySelector('.header-top');
const headerTopMenu = document.querySelectorAll('.header-top > a');
const mainMenu = document.querySelectorAll('.main-menu');
const subMenu = document.querySelectorAll('.sub-menu');
const background = document.querySelector('.sub-menu-background');
const hContainer = document.querySelector('.header-container');

let timer;


//scroll
window.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 0) {
        headerTop.style.height = '0px';
        headerTopMenu.forEach((item) => {
            item.style.transform = 'translateY(-100%)';
        })
        background.style.top = '90px';
    } else {
        headerTop.style.height = '';
        headerTopMenu.forEach((item) => {
            item.style.transform = '';
        })
        background.style.top = '';
    }
})

//nav
mainMenu.forEach((item) => {
    item.addEventListener('mouseenter', onMenu)
})

hContainer.addEventListener('mouseleave', outMenu);

subMenu.forEach((item) => {
    item.addEventListener('mouseenter', onTitle);
    item.addEventListener('mouseleave', outTitle);
})


function onMenu() {
    background.style.height = '230px';

    timer = setTimeout(function () {
        subMenu.forEach((item) => {
            item.style.visibility = 'visible';
        })
    }, 50)
}

function outMenu() {
    background.style.height = '0px';

    subMenu.forEach((item) => {
        item.style.visibility = 'hidden';
    })
}

function onTitle() {
    const sibling = this.previousElementSibling;
    sibling.style.color = '#f9bb00';
}

function outTitle() {
    const sibling = this.previousElementSibling;
    sibling.style.color = '';
}