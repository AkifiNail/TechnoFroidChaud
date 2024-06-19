document.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.hamburger');
    let navLinks = document.querySelector('.nav-links');
    let cross = document.querySelector('.cross');
    let navLinksItems = document.querySelectorAll('.nav-links a');
    let sections = document.querySelectorAll('section');

    if (hamburger && navLinks && cross && navLinksItems.length > 0 && sections.length > 0) {
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let id = entry.target.getAttribute('id');
                let navLink = document.querySelector(`a[href="#${id}"]`);
                if (navLink) {
                    if (entry.isIntersecting) {
                        navLink.classList.add('nav_id');
                    } else {
                        navLink.classList.remove('nav_id');
                    }
                }
            });

            let visibleEntries = entries.filter(entry => entry.isIntersecting);
            if (visibleEntries.length > 0) {
                let id = visibleEntries[0].target.getAttribute('id');
                navLinksItems.forEach(link => {
                    if (link.getAttribute('href') !== `#${id}`) {
                        link.classList.remove('nav_id');
                    }
                });
            }
        }, {
            threshold: 0.5
        });

        sections.forEach(section => {
            observer.observe(section);
        });

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

        let nav = document.querySelector('.navpc');
        if (nav) {
            window.addEventListener('scroll', () => {
                let scroll = window.scrollY;
                if (scroll > 100) {
                    nav.classList.add('navbg-scroll');
                } else {
                    nav.classList.remove('navbg-scroll');
                }
            });
        }

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

        let send = document.querySelector('.send');
        let form = document.querySelectorAll(".form-test");

        if (send && form.length > 0) {
            send.addEventListener('click', function () {
                let empty = false;
                form.forEach((input) => {
                    if (input.value === '') {
                        empty = true;
                    }
                });

                if (!empty) {
                    setTimeout(() => {
                        send.innerHTML = 'Envoi ...';
                        send.style.background = '#69b7ff';
                        send.disabled = true;
                    }, 100);
                }
            });
        }

        if (window.location.search === '?sent') {
            let success = document.querySelector('.succes');
            if (success) {
                success.classList.add('showpopup');
                setTimeout(() => {
                    success.classList.remove('showpopup');
                }, 5000);
            }
        } else if (window.location.search === '?notsent') {
            let error = document.querySelector('.error');
            if (error) {
                error.classList.add('showpopup');
                setTimeout(() => {
                    error.classList.remove('showpopup');
                }, 5000);
            }
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
                window.removeEventListener('scroll', onScroll);
            }
        }

        window.addEventListener('scroll', onScroll);
    }
});
