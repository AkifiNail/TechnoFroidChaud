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



document.addEventListener('DOMContentLoaded', () => {
    let questionContents = document.querySelectorAll('.question-content');
    let reponses = document.querySelectorAll('.reponse');
    let cheveronQuestion = document.querySelectorAll('.chev-question');

    questionContents.forEach((questionContent, index) => {
        questionContent.addEventListener('click', function () {
            questionContent.classList.toggle("question-open");
            cheveronQuestion[index].classList.toggle('rotateChev');
            if (questionContent.classList.contains('question-open')) {
                setTimeout(() => {
                    reponses[index].classList.add('op');
                }, 400);
            } else {
                reponses[index].classList.remove('op');
            }
        });
    });



    if(window.location.search === '?sent') {
        let success = document.querySelector('.success');
         success.classList.add('showpopup');
        setTimeout(() => {
            success.classList.remove('showpopup');
        }, 5000);

    }else if(window.location.search === '?notsent') {
        let error = document.querySelector('.error');
        error.classList.add('showpopup');
        setTimeout(() => {
            error.classList.remove('showpopup');
        }, 5000);
    }
    let target = document.querySelector('.target');
    let numbers = document.querySelectorAll('.number');

    function increaseNum(element) {
        let count = 0;
        let init = element.getAttribute('data-target');
        let max = parseInt(element.getAttribute('data-max'));
        let speed = 30;

        function updateNumber() {
            count++;
            if (count >= max * 0.50) {
                speed += 2; 
            }
            element.textContent = count + init;
            if (count < max) {
                setTimeout(updateNumber, speed);
            }
        }

        setTimeout(updateNumber, speed);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(target)) {
            numbers.forEach(number => {
                increaseNum(number);
            });
            window.removeEventListener('scroll', onScroll); // Remove event after animation
        }
    }

    window.addEventListener('scroll', onScroll);
});



