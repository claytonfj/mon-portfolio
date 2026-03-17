// project-modal.js - Gestion de la modal des projets

function initProjectModal() {
    // Éléments de la modale
    const projectItems = document.querySelectorAll('.project-item');
    const modal = document.querySelector('.project-modal');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalTitle = document.querySelector('.modal-title');
    const modalCategory = document.querySelector('.modal-category');
    const modalDate = document.querySelector('.modal-date');
    const modalDescription = document.querySelector('.modal-description');
    const modalImage = document.querySelector('.modal-image');
    const modalTechStack = document.querySelector('.tech-icons');
    const modalActions = document.querySelector('.modal-actions');

    // Vérifier que tous les éléments existent
    if (!modal || !modalActions) {
        console.log('Modal des projets non trouvée');
        return;
    }

    // Détecter le chemin de base vers le dossier IMAGES
    const basePath = document.querySelector('script[src*="project-modal"]').src.replace(/JS\/project-modal\.js.*$/, '');

    // Données des projets
    const projectsData = {
        'projet1': {
            title: 'Site de gestion des nuisibles',
            category: 'Développement Web',
            date: '2026',
            description: 'Création d\'un site vitrine moderne pour une entreprise de gestion des nuisibles avec galerie interactive, système de devis en ligne et animations CSS personnalisées.',
            image: basePath + 'IMAGES/screenMaugesnuisibles.png',
            techStack: ['html', 'css', 'js', 'php'],
            liveLink: 'https://mauges-nuisibles.fr/',
            showNotHostedMessage: false
        },
        'projet2': {
            title: 'Site de courtiers immobiliers',
            category: 'Développement Web',
            date: '2024',
            description: 'Refonte complète d\'un site web (avec l\'aide de <a href="https://www.media-dom.fr/" target="_blank" rel="noopener noreferrer" style="color: #2575fc; text-decoration: underline;">Mediadom</a>) pour une agence immobilière avec mise en place d\'un système de gestion de biens, recherche avancée et interface administrateur.',
            image: basePath + 'IMAGES/ScreenObontaux.png',
            techStack: ['wordpress', 'php', 'css'],
            liveLink: 'https://www.obontaux.com/',
            showNotHostedMessage: false
        },
        'projet3': {
            title: 'Site d\'artisans en charpente',
            category: 'Développement Front-end',
            date: '2024',
            description: 'Création d\'un site vitrine moderne pour une entreprise de charpente avec galerie interactive, système de devis en ligne et animations CSS personnalisées.',
            image: basePath + 'IMAGES/screennjf.png',
            techStack: ['html', 'css', 'js', 'php'],
            liveLink: '#',
            showNotHostedMessage: true
        },
        'projet4': {
            title: 'Site de food truck de pizzas',
            category: 'Développement Fullstack',
            date: '2025',
            description: 'Plateforme complète pour un food truck avec système de commande en ligne, suivi en temps réel et interface administrateur.',
            image: basePath + 'IMAGES/screentruck.png',
            techStack: ['html', 'css', 'js', 'php'],
            liveLink: '#',
            showNotHostedMessage: true
        },
        'projet5': {
            title: 'Site de vêtements futuristes',
            category: 'Design & Développement',
            date: '2025',
            description: 'Concept store e-commerce avec animations 3D, réalité augmentée pour "essayer" les vêtements et système de paiement sécurisé.',
            image: basePath + 'IMAGES/screenspaceboy.png',
            techStack: ['html', 'css', 'js', 'php'],
            liveLink: '#',
            showNotHostedMessage: true
        },
        'projet6': {
            title: 'Puy du Fou',
            category: 'Application Web Mobile',
            date: '2025',
            description: 'Application web sur le thème du Puy du Fou permettant aux visiteurs de planifier leur journée au parc. Le système génère un itinéraire personnalisé en tenant compte de la vitesse de marche du visiteur et des durées des spectacles. Un espace d\'administration permet la gestion des spectacles et des utilisateurs.<br><br><em>Note : Ce projet n\'est pas totalement fonctionnel ni optimisé — nous avons manqué de temps en fin de PPE, certaines fonctionnalités sont incomplètes.</em>',
            image: basePath + 'IMAGES/screenPUYDUFOU.png',
            techStack: ['php', 'sql', 'html', 'css', 'js'],
            liveLink: 'https://puydufou.ewenevin.fr',
            showNotHostedMessage: true
        },
        'projet7': {
            title: 'MedocLab',
            category: 'Infrastructure Réseau',
            date: '2024',
            description: 'Projet d\'infrastructure réseau complet pour l\'entreprise fictive MedocLab, incluant la mise en place d\'un serveur Windows Server 2019 avec Active Directory, la gestion des utilisateurs, des stratégies de groupe (GPO), et la configuration des services réseau essentiels (DNS, DHCP, partages réseau, scripts PowerShell).',
            image: basePath + 'IMAGES/screenMEDOCLAB.png',
            techStack: [],
            liveLink: basePath + 'IMAGES/Document technique AP1.1 Réseaux Clayton.pdf',
            showNotHostedMessage: false,
            buttonText: 'Voir la documentation',
            buttonIcon: 'fas fa-file-alt'
        },
        'projet8': {
            title: 'Site de gestion des déchêts',
            category: 'Application Web',
            date: '2024',
            description: 'Outil de gestion pour les centres de tri avec tableau de bord analytique, suivi des flux de déchets et génération de rapports.',
            image: basePath + 'IMAGES/screendechets.png',
            techStack: ['html', 'css', 'js', 'php'],
            liveLink: '#',
            showNotHostedMessage: true
        },
        'projet9': {
            title: 'Site de restauration à domicile',
            category: 'Développement Fullstack',
            date: '2025',
            description: 'Marketplace mettant en relation chefs à domicile et clients avec système de réservation, paiement en ligne et évaluations.',
            image: basePath + 'IMAGES/screenburger.png',
            techStack: ['html', 'css', 'js', 'php'],
            liveLink: '#',
            showNotHostedMessage: true
        }
    };

    // Icônes des technologies
    const techIcons = {
        'html': { icon: basePath + 'IMAGES/HTML.png', name: 'HTML5' },
        'css': { icon: basePath + 'IMAGES/CSS.png', name: 'CSS3' },
        'js': { icon: basePath + 'IMAGES/JS.png', name: 'JavaScript' },
        'php': { icon: basePath + 'IMAGES/PHP.png', name: 'PHP' },
        'sql': { icon: basePath + 'IMAGES/SQL.png', name: 'SQL' },
        'wordpress': { icon: basePath + 'IMAGES/Wordpress.png', name: 'WordPress' }
    };

    let scrollPosition = 0;
    let currentProjectLink = '';

    // Fonction pour afficher la vignette "site non hébergé"
    function showNotHostedMessage() {
        const message = document.getElementById('not-hosted-message');
        if (message) {
            message.classList.add('show');
            
            setTimeout(() => {
                message.classList.remove('show');
            }, 2000);
        }
    }

    // Gestionnaire d'événement pour le bouton "Voir en ligne"
    function handleLiveLinkClick(e) {
        if (e.currentTarget.getAttribute('data-not-hosted') === 'true' || 
            e.currentTarget.href === '#' || 
            !e.currentTarget.href.includes('http')) {
            e.preventDefault();
            showNotHostedMessage();
            return false;
        }
    }

    // Créer et configurer le bouton "Voir en ligne"
    function createLiveLinkButton(project) {
        // Nettoyer d'abord les boutons existants
        modalActions.innerHTML = '';
        
        // Créer le bouton principal
        const primaryBtn = document.createElement('a');
        primaryBtn.className = 'btn btn-primary';
        const btnIcon = project.buttonIcon || 'fas fa-external-link-alt';
        const btnText = project.buttonText || 'Voir en ligne';
        primaryBtn.innerHTML = `<i class="${btnIcon}"></i> ${btnText}`;
        primaryBtn.href = project.liveLink;
        primaryBtn.target = "_blank";
        primaryBtn.rel = "noopener noreferrer";
        
        // Ajouter l'attribut data pour indiquer si le site est hébergé
        primaryBtn.setAttribute('data-not-hosted', project.showNotHostedMessage.toString());
        
        // Ajouter l'écouteur d'événements
        primaryBtn.addEventListener('click', handleLiveLinkClick);
        
        // Ajouter le bouton au DOM
        modalActions.appendChild(primaryBtn);
        
        // Stocker le lien actuel pour référence
        currentProjectLink = project.liveLink;
    }

    // Ouvrir la modale
    const openModal = (projectId) => {
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        document.body.style.top = `-${scrollPosition}px`;
        document.body.classList.add('modal-open');

        const project = projectsData[projectId];
        if (!project) return;

        // Mettre à jour le contenu
        modalTitle.textContent = project.title;
        modalCategory.textContent = project.category;
        modalDate.textContent = project.date;
        modalDescription.innerHTML = project.description;
        modalImage.src = project.image;
        modalImage.alt = project.title;

        // Technologies utilisées
        modalTechStack.innerHTML = '';
        project.techStack.forEach(tech => {
            if (techIcons[tech]) {
                const techEl = document.createElement('div');
                techEl.className = 'tech-icon';
                techEl.innerHTML = `<img src="${techIcons[tech].icon}" alt="${techIcons[tech].name}" title="${techIcons[tech].name}">`;
                modalTechStack.appendChild(techEl);
            }
        });

        // Créer et configurer le bouton "Voir en ligne"
        createLiveLinkButton(project);

        // Afficher la modale
        modal.classList.add('active');
    };

    // Fermer la modale
    const closeModal = () => {
        document.body.classList.remove('modal-open');
        modal.classList.remove('active');
        modalImage.src = '';

        window.scrollTo(0, scrollPosition);
        document.body.style.top = '';
    };

    // Écouteurs d'événements pour la modale
    projectItems.forEach((item, index) => {
        const link = item.querySelector('.project-link');
        if (link) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(`projet${index + 1}`);
            });
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-overlay')) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Exporter la fonction pour qu'elle soit accessible depuis main.js
window.initProjectModal = initProjectModal;