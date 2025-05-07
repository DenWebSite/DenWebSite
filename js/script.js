const btn = document.querySelector('.menu-btn');
const header__nav = document.querySelector('.header__nav');

btn.addEventListener('click', () => {
    header__nav.classList.toggle('menu-open');
});

const tg = document.querySelector('.tg');
const tg__show = document.querySelector('.tg-show');

tg.addEventListener('click', () => {
    tg__show.classList.toggle('visually-hidden');
});
