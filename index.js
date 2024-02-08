let before = document.getElementById("before-menu");
let after = document.getElementById("after-menu");

function beforeNav () {
    before.style.display = 'none';
    after.style.display = "block";
}

function afterNav() {
    after.style.display = 'none';
    before.style.display = "block";
}

before.addEventListener('click', beforeNav);

after.addEventListener('click', afterNav);


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1};
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000);
        
}