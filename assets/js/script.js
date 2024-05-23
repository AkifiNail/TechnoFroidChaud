let hamburger = document.querySelector('.hamburger');
let navLinks = document.querySelector('.nav-links');
let cross = document.querySelector('.cross');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('hiddenRotate');
    hamburger.classList.toggle('showRotate');
    cross.classList.toggle('hiddenRotate');
    cross.classList.toggle('showRotate');
});

cross.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('hiddenRotate');
    hamburger.classList.toggle('showRotate');
    cross.classList.toggle('hiddenRotate');
    cross.classList.toggle('showRotate');
});