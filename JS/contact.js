// contact.js - Gestion du formulaire de contact

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        const formData = new FormData(this);
        
        fetch('contact-form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                formMessage.textContent = data.message;
                formMessage.style.backgroundColor = '#d4edda';
                formMessage.style.color = '#155724';
                formMessage.style.display = 'block';
                this.reset();
            } else {
                formMessage.textContent = data.message + (data.errors ? ': ' + data.errors.join(', ') : '');
                formMessage.style.backgroundColor = '#f8d7da';
                formMessage.style.color = '#721c24';
                formMessage.style.display = 'block';
            }
        })
        .catch(error => {
            formMessage.textContent = 'Une erreur réseau s\'est produite. Veuillez réessayer.';
            formMessage.style.backgroundColor = '#f8d7da';
            formMessage.style.color = '#721c24';
            formMessage.style.display = 'block';
        })
        .finally(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    });
}