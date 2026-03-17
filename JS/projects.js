// projects.js - Gestion des projets
function initLoadMoreProjects() {
    const loadMoreBtn = document.getElementById('loadMoreProjects');
    const hiddenProjects = document.querySelectorAll('.hidden-project');
    
    if (!loadMoreBtn || hiddenProjects.length === 0) {
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }
    
    // Cache tous les projets cachés initialement
    hiddenProjects.forEach(project => {
        project.style.display = 'none';
    });
    
    loadMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Afficher tous les projets cachés
        hiddenProjects.forEach((project, index) => {
            // Retirer la classe hidden-project
            project.classList.remove('hidden-project');
            
            // Ajouter la classe pour l'animation
            project.classList.add('showing');
            
            // Afficher l'élément avec un délai pour l'animation
            setTimeout(() => {
                project.style.display = 'block';
            }, index * 100);
        });
        
        // Masquer le bouton après avoir tout affiché
        this.style.display = 'none';
        
        // Option : Changer le texte pour indiquer que tout est affiché
        // setTimeout(() => {
        //     this.textContent = 'Tous les projets sont affichés';
        //     this.style.opacity = '0.7';
        //     this.style.cursor = 'default';
        // }, 300);
    });
}

// Exporter la fonction
window.initLoadMoreProjects = initLoadMoreProjects;