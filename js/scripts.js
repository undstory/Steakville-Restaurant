// ----------------------MOBILE MENU--------------------

const hamburger = document.querySelector('.navbar__hamburger'); 
const mobileMenu = document.querySelector('.navbar__list--mobile');
const mobileItemLink = document.querySelectorAll('.navbar__link--mobile');


let mobileList = false;

hamburger.addEventListener('click', function(){
    
    this.classList.toggle('active');
    (mobileList) ? mobileMenu.style.display = 'none' : mobileMenu.style.display = 'block';
    mobileList = !mobileList;
}, false);


mobileItemLink.forEach(function(element){
    element.addEventListener('click', function(){
        mobileMenu.style.display = 'none';
        hamburger.classList.toggle('active');
        mobileList = !mobileList;
        
    }, false)
});

// ----------------------------GALLERY SLIDER --------------------

const image = document.querySelector('.gallery__img'); 
const dots = document.querySelectorAll('.gallery__dot'); 
const arrowR = document.querySelector('.gallery__arrow--right');
const arrowL = document.querySelector('.gallery__arrow--left');
const dotsContainer = document.querySelectorAll('.gallery__dots');
let currentImg = 1;

function changeDot(index){
    dots.forEach(function(e){
        e.classList.remove('gallery__dot--active'); 
        dots[index].classList.add('gallery__dot--active');
    })
}

function changeImg() {
    image.src = `assets/gallery${currentImg}.jpg`;
    changeDot(currentImg - 1);
    currentImg < 6 ? currentImg++ : (currentImg = 1);
}


arrowR.addEventListener('click', function(){
    clearInterval(sliderInterval);
    image.src = `assets/gallery${currentImg+1}.jpg`;
    changeImg();
    sliderInterval = setInterval(changeImg, 3000);
}, false)

let sliderInterval = setInterval(changeImg, 3000);

//----------


AOS.init();