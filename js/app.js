// Burger menu
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.2}s`;
            }
        })
        burger.classList.toggle('toggle');

    })
}

navSlide();

// Slider
const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');
let postsWrapper = document.querySelector('.posts');

let posts = [...document.querySelectorAll('.post')];

let currentPosition = 0;

function setPosition(position){
    let index = 1;
    if(1024 >= window.innerWidth && window.innerWidth > 768) index = 2;
    if(window.innerWidth > 1024) index = 3;


    if(position > 0) currentPosition = -(posts.length - index) *100;
    else if(position < -(posts.length - index) * 100) currentPosition = 0;
    else currentPosition = position;
    posts.forEach(slide => slide.style.transform = `translateX(${currentPosition}%)`);
}

rightBtn.onclick = (e) => {
    e.preventDefault();
    setPosition(currentPosition -= 100);
}

leftBtn.onclick = (e) => {
    e.preventDefault();
    setPosition(currentPosition += 100);
}