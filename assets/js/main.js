// Fichier JavaScript principal pour le portfolio. 
// Ce fichier peut inclure des fonctionnalités interactives comme des animations, des effets de défilement, ou des formulaires de contact.

document.addEventListener('DOMContentLoaded', function() {
    // Exemple d'animation au défilement
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Exemple de formulaire de contact
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Logique pour traiter le formulaire
            alert('Formulaire soumis !');
        });
    }
});



        // Initialisation AOS
        // Initialisation AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Toggle mode sombre/clair
document.getElementById('theme-toggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    const icon = this.querySelector('i');

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Menu mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Fermer le menu mobile lorsqu'on clique sur un lien
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.remove('active');
        document.getElementById('menu-toggle').classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
});

// Filtrage des projets
document.querySelectorAll('.filter-btn').forEach(button => {

    button.addEventListener('click', () => {

        const filter = button.dataset.filter;

        // Gestion bouton actif
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        // Affichage projets
        document.querySelectorAll('.project-card').forEach(card => {

            if (
                filter === 'all' ||
                card.dataset.category === filter
            ) {

                card.style.display = 'block';

                setTimeout(() => {
                    card.classList.add('show');
                }, 50);

            } else {

                card.classList.remove('show');

                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);

            }

        });

    });

});

// Gestion formulaire Formspree
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData(contactForm);

    const dataObject = Object.fromEntries(
        formData.entries()
    );

    try {

        const response = await fetch(
            'https://formspree.io/f/xeedjyap',
            {
                method: 'POST',

                body: JSON.stringify(dataObject),

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );

        if (response.ok) {

            contactForm.style.display = 'none';

            formSuccess.classList.remove('hidden');

            contactForm.reset();

        } else {

            const errorData = await response.json();

            console.error(
                'Erreur Formspree :',
                errorData
            );

            alert(
                "Une erreur est survenue lors de l'envoi."
            );

        }

    } catch (error) {

        console.error(
            'Erreur réseau :',
            error
        );

        alert(
            "Impossible d'envoyer le message."
        );

    }

});
  