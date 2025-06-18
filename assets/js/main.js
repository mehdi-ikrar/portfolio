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