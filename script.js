// Attendre que le contenu de la page soit entièrement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Sélectionner tous les boutons "Ajouter au panier"
    const buttons = document.querySelectorAll('.product-item .btn');

    // Ajouter un événement de clic à chaque bouton
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Récupérer le nom du produit à partir du parent du bouton
            const productName = event.target.parentElement.querySelector('h3').innerText;
            // Afficher une alerte indiquant que le produit a été ajouté au panier
            alert(`${productName} a été ajouté au panier!`);
        });
    });

    // Sélectionner le formulaire de contact
    const contactForm = document.querySelector('.contact form');

    // Ajouter un événement de soumission au formulaire
    contactForm.addEventListener('submit', (event) => {
        // Empêcher le formulaire de se soumettre automatiquement
        event.preventDefault();
        // Récupérer les données du formulaire
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Vérifier que tous les champs sont remplis
        if (name && email && message) {
            // Afficher un message de confirmation et réinitialiser le formulaire
            alert('Merci de nous avoir contacté, nous reviendrons vers vous sous peu!');
            contactForm.reset();
        } else {
            // Afficher un message d'erreur si des champs sont manquants
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    });
});
