document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('header');
        var scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            header.classList.add('scrolled-99');
            header.classList.remove('scrolled-66');
            header.classList.remove('scrolled-33');
            header.classList.remove('scrolled-0');
        } else if (scrollPosition > 150) {
            header.classList.add('scrolled-66');
            header.classList.remove('scrolled-99');
            header.classList.remove('scrolled-33');
            header.classList.remove('scrolled-0');
        } else if (scrollPosition > 90) {
            header.classList.add('scrolled-33');
            header.classList.remove('scrolled-99');
            header.classList.remove('scrolled-66');
            header.classList.remove('scrolled-0');
        } else {
            header.classList.add('scrolled-0');
            header.classList.remove('scrolled-99');
            header.classList.remove('scrolled-66');
            header.classList.remove('scrolled-33');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const numItems = carouselItems.length;
    const indicatorContainer = document.querySelector('.indicators');

    let currentItemIndex = 0;

    // Créer deux indicateurs
    for (let i = 0; i < 2; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', function() {
            goToItem(i * Math.floor(numItems / 2));
        });
        indicatorContainer.appendChild(indicator);
    }

    // Mettre en surbrillance l'indicateur correspondant à l'élément actuel
    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === Math.floor(currentItemIndex / Math.floor(numItems / 2))) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Fonction pour déplacer le carrousel à l'élément spécifié
    function goToItem(index) {
        if (index >= 0 && index < numItems) {
            currentItemIndex = index;
            const offset = -carouselItems[currentItemIndex].offsetLeft;
            carousel.style.transform = `translateX(${offset}px)`;
            updateIndicators();
        }
    }

    // Activer l'indicateur correspondant au premier élément au chargement de la page
    updateIndicators();
});
