// veille.js - Gestion de la section Veille Informatique

function initVeille() {
    const filters = document.querySelectorAll('.veille-filter');
    const cards = document.querySelectorAll('.veille-card');

    if (!filters.length || !cards.length) return;

    filters.forEach(filter => {
        filter.addEventListener('click', function () {
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');

            const category = this.dataset.filter;

            cards.forEach((card, index) => {
                const cardCategory = card.dataset.category;
                const matches = category === 'all' || cardCategory === category;

                if (matches) {
                    card.classList.remove('hidden');
                    card.style.animationDelay = `${(index % 3) * 60}ms`;
                    card.classList.add('fade-in');
                    card.addEventListener('animationend', () => {
                        card.classList.remove('fade-in');
                        card.style.animationDelay = '';
                    }, { once: true });
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('fade-in');
                }
            });
        });
    });
}
