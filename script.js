let burger = document.querySelector('.header__burger');
let header = document.querySelector('.header');
let ul = document.querySelector('.header__nav-ul')
let nav = document.querySelector('.header__nav');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('is__active');
    nav.classList.toggle('is__active');
    ul.classList.toggle('is__active-menu-list');
    header.classList.toggle('is__active-background');
    
})

