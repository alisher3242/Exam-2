const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__desktop');
const closeBtn = document.querySelector('.header__close');

hamburger.addEventListener('click', (e) => {
    menu.classList.add('header__desktop--on');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('header__desktop--on')
})

const modalbtn = document.querySelector('.footer__button');
const modall = document.querySelector('.modal__wrapper-large');
const closebutton = document.querySelector('.modal__close');
const curtain = document.querySelector('.curtain');

modalbtn.addEventListener('click', (e) => {
    modall.classList.add('modal__wrapper-large--on');
    curtain.classList.add('curtain--on')
})

closebutton.addEventListener('click', () => {
    modall.classList.remove('modal__wrapper-large--on')
    curtain.classList.remove('curtain--on')
})