const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.navbar');
const cards = document.querySelector('.popular-places');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('change');
});

prevBtn.addEventListener('click', ()=>{
    cards.style.scroll = '-300px';
});

nextBtn.addEventListener('click', ()=>{
    console.log('Btn Clicked')
});