const btn = document.querySelector('.menu-btn');
const header__nav = document.querySelector('.header__nav');

btn.addEventListener('click', ()=>{
    header__nav.classList.toggle('menu-open');
});