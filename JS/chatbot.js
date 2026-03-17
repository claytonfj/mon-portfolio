// chatbot.js — FAQ étendue Portfolio Clayton

(function () {
    'use strict';

    // =============================================
    // BASE DE CONNAISSANCES FAQ — COMPLÈTE
    // =============================================
    const FAQ = [

        // ── SALUTATIONS ──────────────────────────────────────────────────
        {
            keywords: ['bonjour', 'salut', 'hello', 'hey', 'bonsoir', 'coucou', 'hi', 'bonne journee', 'bonne soiree', 'yo', 'allo', 'allô'],
            answer: 'Bonjour ! Je suis l\'assistant du portfolio de Clayton FOIN-JOLIVET. Je peux vous renseigner sur ses <strong>compétences</strong>, <strong>projets</strong>, <strong>certifications</strong>, son <strong>parcours</strong> ou ses <strong>créations visuelles</strong>. Par quoi commençons-nous ?'
        },
        {
            keywords: ['merci', 'super', 'parfait', 'nickel', 'top', 'cool', 'excellent', 'genial', 'génial', 'bravo', 'bien', 'ok merci', 'super merci', 'tres bien'],
            answer: 'Avec plaisir ! N\'hésitez pas si vous avez d\'autres questions. Clayton sera aussi ravi de vous répondre directement via la section <strong>Contact</strong> en bas de page.'
        },
        {
            keywords: ['au revoir', 'bye', 'ciao', 'adieu', 'bonne continuation', 'a bientot', 'à bientôt', 'tchao'],
            answer: 'À bientôt ! N\'hésitez pas à revenir. Vous pouvez aussi contacter Clayton directement via le formulaire de <strong>Contact</strong> ou sur LinkedIn.'
        },
        {
            keywords: ['aide', 'aider', 'help', 'que sais-tu', 'que peux-tu', 'que peux tu', 'tu peux faire quoi', 'quoi faire'],
            answer: 'Je peux vous renseigner sur :\n\n• <strong>Clayton</strong> — qui il est, son profil, son âge\n• <strong>Compétences</strong> — toutes ses technos et niveaux\n• <strong>Projets</strong> — tous ses projets réalisés\n• <strong>Certifications</strong> — toutes ses certifications\n• <strong>Parcours</strong> — ses stages et formations\n• <strong>Veille</strong> — ses centres d\'intérêt tech\n• <strong>Contact</strong> — comment le joindre\n\nPosez votre question !'
        },

        // ── IDENTITÉ / PROFIL ─────────────────────────────────────────────
        {
            keywords: ['qui est', 'qui est clayton', 'c\'est qui', 'cest qui', 'présente', 'presentation', 'profil', 'clayton foin', 'foin jolivet', 'foin-jolivet'],
            answer: '<strong>Clayton FOIN-JOLIVET</strong> est un développeur web de 21 ans, passionné par la création digitale. Spécialisé en développement <strong>Front-End & Back-End</strong>, il allie rigueur technique et sensibilité design pour créer des sites web modernes, performants et esthétiques.'
        },
        {
            keywords: ['age', 'âge', 'quel age', 'ans', 'né', 'naissance', 'jeune'],
            answer: 'Clayton a <strong>21 ans</strong>. À cet âge, il a déjà réalisé une dizaine de projets web et décroché 11 certifications professionnelles !'
        },
        {
            keywords: ['passion', 'passionné', 'passionne', 'aime', 'kiffe', 'intérêt', 'interet', 'motivation'],
            answer: 'Clayton est passionné par la <strong>création digitale</strong> sous toutes ses formes : développement web, design d\'interface, animations CSS, expérience utilisateur... Il aime construire des choses belles ET fonctionnelles.'
        },
        {
            keywords: ['spécialité', 'specialite', 'domaine', 'métier', 'fait quoi', 'travail', 'développeur', 'developpeur', 'dev'],
            answer: 'Clayton est <strong>développeur web Front-End & Back-End</strong>. Il crée des sites vitrines, e-commerce, des applications web, et s\'occupe du design UI/UX. Il travaille aussi bien sur l\'intégration visuelle (HTML/CSS/JS) que sur la partie serveur (PHP/SQL).'
        },
        {
            keywords: ['front end', 'front-end', 'frontend', 'côté client', 'cote client'],
            answer: 'En <strong>Front-End</strong>, Clayton maîtrise HTML, CSS, JavaScript, les animations CSS et le design responsive. Il porte une attention particulière à l\'esthétique, aux animations et à l\'expérience utilisateur.'
        },
        {
            keywords: ['back end', 'back-end', 'backend', 'côté serveur', 'cote serveur', 'serveur'],
            answer: 'En <strong>Back-End</strong>, Clayton travaille avec PHP et MySQL/SQL pour les bases de données. Il a développé des plugins WordPress, des frameworks PHP et des systèmes de gestion de contenu dynamique.'
        },
        {
            keywords: ['fullstack', 'full stack', 'full-stack'],
            answer: 'Oui, Clayton est un développeur <strong>Full-Stack</strong> ! Il couvre à la fois le Front-End (HTML, CSS, JS, design) et le Back-End (PHP, SQL, WordPress).'
        },
        {
            keywords: ['nationalite', 'nationalité', 'pays', 'france', 'français', 'francais', 'origine'],
            answer: 'Clayton est <strong>français</strong> et exerce en France.'
        },
        {
            keywords: ['linkedin', 'réseau', 'reseau', 'profil linkedin', 'professionnel'],
            answer: 'Retrouvez Clayton sur LinkedIn :\n<a href="https://www.linkedin.com/in/clayton-foin-jolivet-907069257/" target="_blank" rel="noopener noreferrer" style="color:#2575fc;text-decoration:underline;">linkedin.com/in/clayton-foin-jolivet-907069257</a>'
        },
        {
            keywords: ['telephone', 'téléphone', 'numéro', 'numero', 'appeler', 'appel', 'portable', 'mobile', 'tél', 'tel'],
            answer: 'Vous pouvez appeler ou envoyer un SMS à Clayton au :\n<strong>+33 6 56 80 54 27</strong>'
        },
        {
            keywords: ['email', 'mail', 'courriel', 'adresse mail', 'adresse email', 'écrire', 'ecrire'],
            answer: 'Pour contacter Clayton par email ou message, utilisez directement le <strong>formulaire de contact</strong> en bas du portfolio — c\'est la façon la plus simple et rapide !'
        },
        {
            keywords: ['contact', 'joindre', 'contacter', 'message', 'recruter', 'embauche', 'embaucher'],
            answer: 'Vous pouvez joindre Clayton de plusieurs façons :\n\n• <strong>Formulaire de contact</strong> — section Contact du portfolio\n• <strong>Téléphone</strong> — +33 6 56 80 54 27\n• <strong>LinkedIn</strong> — linkedin.com/in/clayton-foin-jolivet-907069257\n\nIl répond rapidement !'
        },
        {
            keywords: ['cv', 'curriculum', 'vitae', 'télécharger cv', 'telecharger cv', 'voir cv'],
            answer: 'Le <strong>CV de Clayton</strong> est disponible en téléchargement directement depuis le portfolio. Cliquez sur le bouton <strong>"Voir mon CV"</strong> dans la section Accueil ou À propos.'
        },
        {
            keywords: ['disponible', 'disponibilité', 'dispo', 'libre', 'ouvert', 'mission', 'freelance', 'alternance', 'stage', 'poste', 'emploi', 'travail ensemble'],
            answer: 'Pour connaître les disponibilités actuelles de Clayton (freelance, alternance, CDI...), contactez-le directement au <strong>+33 6 56 80 54 27</strong> ou via le formulaire de contact. Il est ouvert aux opportunités !'
        },
        {
            keywords: ['tarif', 'prix', 'coût', 'cout', 'devis', 'combien', 'budget projet', 'facturation'],
            answer: 'Les tarifs varient selon la nature et la complexité du projet. Contactez Clayton via le <strong>formulaire de contact</strong> pour obtenir un devis personnalisé et gratuit.'
        },

        // ── COMPÉTENCES GÉNÉRALES ─────────────────────────────────────────
        {
            keywords: ['compétence', 'competence', 'competences', 'compétences', 'technologie', 'technologies', 'stack', 'savoir faire', 'savoir-faire', 'skills', 'maitrise', 'maîtrise', 'connais', 'sait'],
            answer: 'Voici l\'ensemble des compétences de Clayton :\n\n<strong>Avancé+</strong>\n→ Design UI/UX (90%)\n\n<strong>Avancé</strong>\n→ HTML/CSS (75%) · WordPress (75%) · Systèmes & Réseaux (75%)\n\n<strong>Intermédiaire</strong>\n→ JavaScript (50%) · PHP (50%) · SQL/MySQL (50%)\n\n<strong>Débutant</strong>\n→ Java (25%) · C++ (25%)'
        },
        {
            keywords: ['niveau', 'niveaux', 'avancé', 'avance', 'intermédiaire', 'intermediaire', 'débutant', 'debutant', 'expert'],
            answer: 'Clayton a différents niveaux selon les technologies :\n\n• <strong>Avancé+</strong> — Design UI/UX\n• <strong>Avancé</strong> — HTML/CSS, WordPress, Systèmes & Réseaux\n• <strong>Intermédiaire</strong> — JavaScript, PHP, SQL\n• <strong>Débutant</strong> — Java, C++'
        },
        {
            keywords: ['point fort', 'points forts', 'meilleur', 'meilleure', 'force', 'fort en', 'top compétence', 'top competence', 'domaine fort'],
            answer: 'Le point fort de Clayton est le <strong>Design UI/UX</strong> (niveau avancé+, 90%), combiné à une solide maîtrise de <strong>HTML/CSS</strong> et <strong>WordPress</strong>. C\'est sa signature : des sites visuellement soignés et techniquement solides.'
        },
        {
            keywords: ['apprend', 'apprendre', 'formation continue', 'se forme', 'progresse', 'améliore', 'ameliore', 'nouveau langage', 'en cours'],
            answer: 'Clayton se forme continuellement. Il obtient régulièrement de nouvelles certifications (8 rien qu\'en 2024 via OpenClassrooms) et se tient informé des dernières tendances tech via sa veille technologique active.'
        },
        {
            keywords: ['outil', 'outils', 'logiciel', 'logiciels', 'utilise', 'utiliser', 'vscode', 'editeur', 'éditeur', 'ide'],
            answer: 'Clayton utilise principalement :\n\n• <strong>VS Code</strong> — éditeur de code principal\n• <strong>Figma</strong> — design UI/UX et maquettes\n• <strong>Git & GitHub</strong> — versioning et collaboration\n• <strong>WordPress</strong> — CMS avancé\n• <strong>MAMP</strong> — serveur local de développement\n• <strong>Swiper.js, ScrollReveal</strong> — librairies JS'
        },

        // ── HTML / CSS ────────────────────────────────────────────────────
        {
            keywords: ['html', 'html5', 'balisage', 'structure', 'semantic', 'sémantique'],
            answer: 'Clayton maîtrise <strong>HTML5</strong> à un niveau avancé. Il structure ses pages de façon sémantique et accessible. Certifié HTML/CSS par OpenClassrooms en 2024.'
        },
        {
            keywords: ['css', 'css3', 'style', 'styliser', 'stylesheet', 'feuille de style'],
            answer: 'Clayton maîtrise <strong>CSS3</strong> à un niveau avancé. Il crée des mises en page complexes (Grid, Flexbox), des animations fluides, des effets visuels modernes (glassmorphism, gradients...) et des designs 100% responsive.'
        },
        {
            keywords: ['animation', 'animations', 'transition', 'transitions', 'effet', 'effets', 'keyframe', 'css animé', 'mouvement'],
            answer: 'Clayton est certifié <strong>Animations CSS</strong> (OpenClassrooms 2024). Il crée des animations et transitions fluides : keyframes, hover effects, scroll animations, loaders... Ce portfolio en est un parfait exemple !'
        },
        {
            keywords: ['responsive', 'mobile', 'adaptation', 'tablette', 'tablet', 'media query', 'media queries', 'adaptatif'],
            answer: 'Clayton maîtrise le <strong>Responsive Design</strong>. Tous ses sites s\'adaptent parfaitement aux mobiles, tablettes et desktops grâce aux media queries CSS et à une approche mobile-first.'
        },
        {
            keywords: ['flexbox', 'flex', 'grid', 'css grid', 'mise en page', 'layout'],
            answer: 'Clayton utilise <strong>Flexbox et CSS Grid</strong> pour créer des mises en page modernes, flexibles et responsives. Il est à l\'aise avec les deux approches selon les besoins du projet.'
        },
        {
            keywords: ['glassmorphism', 'glass', 'blur', 'backdrop', 'verre', 'effet verre', 'transparent'],
            answer: 'Le <strong>glassmorphism</strong> est l\'une des tendances de design que Clayton maîtrise : effets de flou (backdrop-filter), transparences, bordures lumineuses... Visible notamment dans ce portfolio !'
        },
        {
            keywords: ['gradient', 'dégradé', 'degrade', 'violet', 'bleu', 'couleur', 'couleurs', 'palette'],
            answer: 'Clayton est passionné par la <strong>théorie des couleurs</strong> et les dégradés. Sa signature : les tons <strong>violet (#6a11cb) → bleu (#2575fc)</strong>, visibles dans ce portfolio. Il conçoit ses palettes de A à Z via Figma.'
        },

        // ── JAVASCRIPT ────────────────────────────────────────────────────
        {
            keywords: ['javascript', 'js', 'vanilla js', 'script', 'dom', 'manipulation dom'],
            answer: 'Clayton a un niveau <strong>intermédiaire en JavaScript</strong> (50%). Il développe en Vanilla JS : manipulation du DOM, gestion d\'événements, animations, fetch API, carousels... Certifié JS par OpenClassrooms en 2024.'
        },
        {
            keywords: ['fetch', 'api', 'ajax', 'requête', 'requete', 'asynchrone', 'async', 'json'],
            answer: 'Clayton utilise la <strong>Fetch API</strong> en JavaScript pour les appels asynchrones (AJAX). Il sait récupérer et afficher des données JSON dynamiquement sur une page.'
        },
        {
            keywords: ['framework js', 'react', 'vue', 'angular', 'node', 'next'],
            answer: 'Actuellement, Clayton se concentre sur <strong>Vanilla JavaScript</strong> et continue à progresser. Les frameworks comme React ou Vue sont dans sa liste d\'apprentissage pour la suite !'
        },
        {
            keywords: ['swiper', 'carousel', 'slider', 'scrollreveal', 'librairie', 'library'],
            answer: 'Clayton utilise des librairies JS comme <strong>Swiper.js</strong> (carousels) et <strong>ScrollReveal</strong> (animations au scroll), visibles dans ce portfolio.'
        },

        // ── PHP ──────────────────────────────────────────────────────────
        {
            keywords: ['php', 'php8', 'langage serveur', 'backend php', 'code php'],
            answer: 'Clayton a un niveau <strong>intermédiaire en PHP</strong> (50%). Il développe des scripts back-end, gère des formulaires, crée des plugins WordPress, et a travaillé sur un framework PHP interne lors de son stage chez Groupe Brangeon. Certifié PHP & MySQL (OpenClassrooms 2024).'
        },
        {
            keywords: ['plugin wordpress', 'plugin wp', 'shortcode', 'theme wordpress', 'thème wordpress', 'extension'],
            answer: 'Clayton a développé des <strong>plugins et shortcodes PHP personnalisés</strong> pour WordPress lors de son stage chez Media-Dom en 2025. Il sait créer des thèmes et étendre les fonctionnalités de WordPress.'
        },
        {
            keywords: ['framework php', 'framework interne', 'brangeon php', 'interne php'],
            answer: 'Lors de son stage chez <strong>Groupe Brangeon en 2026</strong>, Clayton a développé des applications en PHP via un framework PHP interne à l\'entreprise, renforçant sa maîtrise du développement back-end sur mesure.'
        },

        // ── SQL / BASE DE DONNÉES ─────────────────────────────────────────
        {
            keywords: ['sql', 'mysql', 'base de données', 'base de donnees', 'database', 'bdd', 'requête sql', 'requete sql', 'phpmyadmin'],
            answer: 'Clayton a un niveau <strong>intermédiaire en SQL/MySQL</strong> (50%). Il conçoit des bases de données, écrit des requêtes SELECT, INSERT, UPDATE, DELETE et gère les relations entre tables. Certifié PHP & MySQL (OpenClassrooms 2024).'
        },

        // ── WORDPRESS ────────────────────────────────────────────────────
        {
            keywords: ['wordpress', 'wp', 'cms', 'elementor', 'woocommerce', 'sites wordpress', 'refonte wordpress'],
            answer: 'Clayton maîtrise <strong>WordPress à un niveau avancé</strong> (75%). Il réalise des installations, personnalisations, refontes, et développe des plugins et shortcodes PHP sur mesure. Il a notamment refait le site de courtiers immobiliers et le site de Media-Dom via WordPress.'
        },

        // ── JAVA / C++ ────────────────────────────────────────────────────
        {
            keywords: ['java', 'java certif', 'programmation objet', 'poo', 'orienté objet'],
            answer: 'Clayton a un niveau <strong>débutant en Java</strong> (25%), avec une certification Java obtenue en 2023. Il connaît les bases de la programmation orientée objet.'
        },
        {
            keywords: ['c++', 'cpp', 'c plus plus', 'langage bas niveau', 'langage système'],
            answer: 'Clayton a des <strong>bases en C++</strong> (niveau débutant, 25%). Il connaît les concepts fondamentaux de ce langage bas niveau.'
        },

        // ── DESIGN UI/UX ─────────────────────────────────────────────────
        {
            keywords: ['design', 'ui', 'ux', 'ui ux', 'interface', 'expérience utilisateur', 'experience utilisateur', 'ergonomie', 'maquette', 'prototype'],
            answer: 'Le <strong>Design UI/UX</strong> est le point fort de Clayton — niveau avancé+ (90%) ! Il conçoit des interfaces intuitives et esthétiques avec Figma, en travaillant la hiérarchie visuelle, les couleurs, la typographie et les parcours utilisateur.'
        },
        {
            keywords: ['figma', 'maquette figma', 'wireframe', 'prototype figma', 'design figma', 'outil design'],
            answer: 'Clayton maîtrise <strong>Figma</strong> pour la création de maquettes, wireframes et prototypes interactifs. Certifié Figma (OpenClassrooms 2024) et UX Design (OpenClassrooms 2024).'
        },
        {
            keywords: ['wireframe', 'zoning', 'architecture information', 'parcours utilisateur', 'user flow', 'user journey'],
            answer: 'Clayton conçoit des <strong>wireframes et parcours utilisateur</strong> pour structurer ses projets avant le développement. Cette approche UX garantit une expérience fluide et intuitive pour les visiteurs.'
        },
        {
            keywords: ['typographie', 'typo', 'police', 'font', 'poppins', 'google fonts', 'fonte'],
            answer: 'Clayton accorde une importance particulière à la <strong>typographie</strong>. Il travaille avec Google Fonts (comme Poppins sur ce portfolio) et choisit ses polices en fonction de la personnalité de chaque projet.'
        },
        {
            keywords: ['charte graphique', 'identité visuelle', 'identite visuelle', 'logo', 'branding', 'brand'],
            answer: 'Clayton crée des <strong>identités visuelles</strong> complètes : choix des couleurs, typographies, logos et chartes graphiques cohérentes. C\'est l\'un de ses services proposés.'
        },

        // ── GIT / GITHUB ─────────────────────────────────────────────────
        {
            keywords: ['git', 'github', 'versioning', 'version', 'commit', 'push', 'pull', 'branch', 'branche', 'depot', 'dépôt', 'repository'],
            answer: 'Clayton utilise <strong>Git & GitHub</strong> pour gérer ses projets : commits, branches, pull requests... Certifié Git & GitHub par OpenClassrooms en 2024.'
        },

        // ── SYSTÈMES & RÉSEAUX ───────────────────────────────────────────
        {
            keywords: ['système', 'systeme', 'réseau', 'reseau', 'network', 'infrastructure', 'serveur', 'linux', 'windows server', 'tcp ip', 'ip', 'dns'],
            answer: 'Clayton a un niveau <strong>avancé en Systèmes & Réseaux</strong> (75%). Il maîtrise les fondamentaux des réseaux informatiques : protocoles TCP/IP, DNS, configuration serveur, architecture réseau.'
        },

        // ── PROJETS ──────────────────────────────────────────────────────
        {
            keywords: ['projet', 'projets', 'réalisation', 'realisations', 'réalisations', 'travaux', 'portfolio projet', 'ce qu\'il a fait', 'ce qu il a fait', 'liste projets', 'tous les projets'],
            answer: 'Clayton a réalisé <strong>9 projets web</strong> :\n\n1. Site de gestion des nuisibles\n2. Site de courtiers immobiliers (WordPress)\n3. Site d\'artisans en charpente\n4. Site de food truck de pizzas\n5. Site de vêtements futuristes\n6. Site de gestion des déchets\n7. Site de restauration à domicile\n8. Site e-commerce de vins\n9. Application de gestion de budget\n\nDemandez-m\'en plus sur chacun !'
        },
        {
            keywords: ['combien de projets', 'nombre de projets', 'combien projets'],
            answer: 'Clayton a réalisé <strong>9 projets web</strong>, allant du site vitrine au prototype d\'application en passant par l\'e-commerce.'
        },
        {
            keywords: ['nuisible', 'pest', 'gestion nuisible', 'site nuisible', 'dératisation', 'deratisation'],
            answer: '<strong>Site de gestion des nuisibles</strong>\n\nSite web complet créé avec HTML, CSS et JavaScript via VS Code. Interface professionnelle pour une entreprise spécialisée dans la gestion des nuisibles.'
        },
        {
            keywords: ['immobil', 'courtier', 'agence immobilier', 'agence immobilière', 'immobilier'],
            answer: '<strong>Site de courtiers immobiliers</strong>\n\nRefonte complète d\'un site existant via WordPress. Modernisation de l\'interface, optimisation des performances et mise à jour du contenu pour une agence de courtage immobilier.'
        },
        {
            keywords: ['charpente', 'artisan', 'menuiserie', 'bois', 'construction', 'btp'],
            answer: '<strong>Site d\'artisans en charpente</strong>\n\nRefonte complète via VS Code en HTML/CSS/JS. Site vitrine moderne et professionnel pour des artisans charpentiers.'
        },
        {
            keywords: ['pizza', 'food truck', 'foodtruck', 'restauration rapide', 'pizzeria'],
            answer: '<strong>Site de food truck de pizzas</strong>\n\nSite complet créé de zéro via VS Code. Design chaleureux et appétissant, avec menu interactif et informations de localisation du food truck.'
        },
        {
            keywords: ['vêtement', 'vetement', 'futuriste', 'mode', 'fashion', 'fringue', 'vêtements futuristes'],
            answer: '<strong>Site de vêtements futuristes</strong>\n\nPrototype créé via VS Code avec un design avant-gardiste et futuriste. Exploration d\'une identité visuelle forte pour une marque de mode alternative.'
        },
        {
            keywords: ['déchet', 'dechet', 'ordure', 'recyclage', 'tri', 'environnement', 'ecologie', 'écologie'],
            answer: '<strong>Site de gestion des déchets</strong>\n\nPrototype d\'application web créé via VS Code. Interface intuitive pour une solution de gestion et de tri des déchets urbains.'
        },
        {
            keywords: ['restauration domicile', 'livraison repas', 'repas', 'traiteur', 'cuisine', 'cuisinier'],
            answer: '<strong>Site de restauration à domicile</strong>\n\nPrototype créé via VS Code. Plateforme de restauration avec menu en ligne, système de commande et interface de suivi.'
        },
        {
            keywords: ['e-commerce', 'ecommerce', 'vin', 'vins', 'boutique', 'shop', 'magasin', 'achat en ligne', 'paiement'],
            answer: '<strong>Site e-commerce de vins</strong>\n\nPlateforme e-commerce complète avec catalogue produits, panier d\'achat et système de paiement sécurisé. Projet alliant développement front/back et UX e-commerce.'
        },
        {
            keywords: ['budget', 'dépense', 'depense', 'application budget', 'gestion budget', 'finance', 'argent', 'comptabilité', 'comptabilite'],
            answer: '<strong>Application de gestion de budget</strong>\n\nApplication web complète pour suivre ses dépenses personnelles : saisie des entrées/sorties, visualisation graphique des dépenses, catégorisation et historique.'
        },

        // ── CERTIFICATIONS ───────────────────────────────────────────────
        {
            keywords: ['certification', 'certif', 'diplôme', 'diplome', 'formation', 'formations', 'certifications', 'tous les certifs', 'liste certifications'],
            answer: 'Clayton possède <strong>11 certifications</strong> :\n\n<strong>OpenClassrooms (2024)</strong>\n→ Figma · UI Design · UX Design\n→ JavaScript · HTML/CSS\n→ PHP & MySQL · Animations CSS · Git & GitHub\n\n<strong>Autres (2023)</strong>\n→ Java · PIX (5/5 domaines) · Voltaire (499/1000, Expert)'
        },
        {
            keywords: ['combien certif', 'nombre certif', 'combien de certifications'],
            answer: 'Clayton a obtenu <strong>11 certifications</strong> au total — 8 via OpenClassrooms en 2024 et 3 autres en 2023 (Java, PIX, Voltaire).'
        },
        {
            keywords: ['openclassrooms', 'oc', 'open classrooms', 'plateforme formation'],
            answer: 'Clayton a obtenu <strong>8 certifications OpenClassrooms en 2024</strong> :\n\n• Figma\n• UI Design\n• UX Design\n• JavaScript (3 mois)\n• HTML/CSS\n• PHP & MySQL (4 mois)\n• Animations CSS\n• Git & GitHub'
        },
        {
            keywords: ['certif figma', 'certification figma', 'figma oc', 'formation figma'],
            answer: 'Clayton est certifié <strong>Figma</strong> via OpenClassrooms (2024). Cette formation couvre la création de maquettes, prototypes interactifs et systèmes de design.'
        },
        {
            keywords: ['certif ui', 'certification ui design', 'ui design certif', 'formation ui'],
            answer: 'Clayton est certifié <strong>UI Design</strong> via OpenClassrooms (2024). Cette formation porte sur la conception d\'interfaces visuelles attractives et cohérentes.'
        },
        {
            keywords: ['certif ux', 'certification ux design', 'ux design certif', 'formation ux'],
            answer: 'Clayton est certifié <strong>UX Design</strong> via OpenClassrooms (2024). Il conçoit des expériences utilisateur optimisées : research, wireframes, tests utilisateurs.'
        },
        {
            keywords: ['certif js', 'certification javascript', 'formation js', 'formation javascript'],
            answer: 'Clayton est certifié <strong>JavaScript</strong> via OpenClassrooms (2024) — 3 mois de formation, niveau Intermédiaire. Couverture du JS moderne, manipulation du DOM et logique applicative.'
        },
        {
            keywords: ['certif html css', 'certification html', 'formation html css', 'certif css'],
            answer: 'Clayton est certifié <strong>HTML/CSS</strong> via OpenClassrooms (2024), niveau Intermédiaire+. Formation couvrant HTML5, CSS3, Flexbox, Grid et responsive design.'
        },
        {
            keywords: ['certif php', 'certification php', 'certif mysql', 'certification mysql', 'formation php mysql'],
            answer: 'Clayton est certifié <strong>PHP & MySQL</strong> via OpenClassrooms (2024) — 4 mois de formation, niveau Intermédiaire. Développement back-end, bases de données et PHP orienté objet.'
        },
        {
            keywords: ['certif animations', 'certification animations', 'formation animations css', 'certif anim'],
            answer: 'Clayton est certifié <strong>Animations CSS</strong> via OpenClassrooms (2024), niveau Intermédiaire+. Keyframes, transitions, transforms et animations avancées.'
        },
        {
            keywords: ['certif git', 'certification git', 'certif github', 'certification github', 'formation git'],
            answer: 'Clayton est certifié <strong>Git & GitHub</strong> via OpenClassrooms (2024). Gestion de versions, branches, collaboration et bonnes pratiques DevOps.'
        },
        {
            keywords: ['pix', 'certification pix', 'compétences numériques', 'competences numeriques', 'numérique', 'numerique'],
            answer: 'Clayton est certifié <strong>PIX</strong> (2023) avec <strong>5/5 domaines numériques validés</strong>, au niveau Avancé. PIX est la certification officielle française des compétences numériques.'
        },
        {
            keywords: ['voltaire', 'certification voltaire', 'orthographe', 'grammaire', 'français écrit', 'francais ecrit', 'score voltaire'],
            answer: 'Clayton possède la <strong>Certification Voltaire</strong> (2023) avec un score de <strong>499/1000 — niveau Expert</strong> en orthographe et grammaire française. Une preuve de son sérieux et de sa rigueur professionnelle.'
        },
        {
            keywords: ['certif java', 'certification java', 'formation java'],
            answer: 'Clayton est certifié <strong>Java</strong> (2023). Il connaît les bases de la programmation orientée objet avec ce langage.'
        },

        // ── PARCOURS / STAGES ─────────────────────────────────────────────
        {
            keywords: ['parcours', 'experience', 'expérience', 'carrière', 'carriere', 'historique', 'timeline', 'cv'],
            answer: 'Parcours professionnel de Clayton :\n\n<strong>2026 — Stage Groupe Brangeon</strong> (6 semaines)\nDéveloppement d\'applications PHP via framework interne\n\n<strong>2025 — Stage Media-Dom</strong> (6 semaines)\nRefonte WordPress + plugins PHP personnalisés\n\n<strong>2021 — Stage Groupe Brangeon</strong>\nPremière expérience professionnelle'
        },
        {
            keywords: ['stage', 'stagiaire', 'stages'],
            answer: 'Clayton a effectué <strong>3 stages</strong> :\n\n• <strong>2026</strong> — Groupe Brangeon : PHP & framework interne (6 semaines)\n• <strong>2025</strong> — Media-Dom : WordPress & plugins PHP (6 semaines)\n• <strong>2021</strong> — Groupe Brangeon : premier stage'
        },
        {
            keywords: ['brangeon', 'groupe brangeon', 'brangeon 2026', 'brangeon 2021'],
            answer: '<strong>Groupe Brangeon</strong>\n\nClayton y a effectué deux stages :\n→ <strong>2021</strong> : premier stage professionnel\n→ <strong>2026</strong> (6 semaines) : développement d\'applications PHP avec un framework PHP interne à l\'entreprise'
        },
        {
            keywords: ['media-dom', 'mediadom', 'media dom', 'stage 2025'],
            answer: '<strong>Media-Dom — Stage 2025</strong> (6 semaines)\n\nRefonte d\'un site web complet via WordPress, avec création de plugins PHP personnalisés et développement de shortcodes sur mesure. Un projet concret mêlant WordPress avancé et PHP.'
        },
        {
            keywords: ['formation scolaire', 'école', 'ecole', 'bts', 'lycée', 'lycee', 'informatique scolaire', 'études', 'etudes'],
            answer: 'Clayton a suivi une <strong>formation en développement web</strong> alliant cours théoriques et projets pratiques. Il complète sa formation initiale avec des certifications professionnelles (OpenClassrooms, PIX, Voltaire).'
        },


        // ── VEILLE TECHNOLOGIQUE ─────────────────────────────────────────
        {
            keywords: ['veille', 'veille techno', 'veille technologique', 'actualité', 'actualite', 'news tech', 'info tech', 'technologie actualité'],
            answer: 'Clayton effectue une <strong>veille technologique active</strong> dans 3 domaines :\n\n🤖 <strong>IA & Innovation</strong> — LLMs, Copilot, Mistral, bonnes pratiques en production\n🛡️ <strong>Cybersécurité</strong> — OWASP Top 10, prompt injection, ANSSI\n💻 <strong>Développement Web</strong> — CSS moderne, architecture Front-End, performances'
        },
        {
            keywords: ['intelligence artificielle', 'ia', 'ai', 'llm', 'gpt', 'claude', 'mistral', 'copilot', 'machine learning', 'ml', 'chatgpt'],
            answer: 'Clayton suit de près l\'<strong>actualité de l\'IA</strong> : GitHub Copilot, Mistral Large 2, LLMs en production (RAG, évaluation, optimisation des coûts). Il intègre ces outils dans sa pratique de développement.'
        },
        {
            keywords: ['cybersécurité', 'cybersecurite', 'securite', 'sécurité', 'owasp', 'hacking', 'protection', 'vulnérabilité', 'vulnerabilite'],
            answer: 'Clayton se tient informé sur la <strong>cybersécurité web</strong> : OWASP Top 10 2025 (dont les nouvelles vulnérabilités IA), prompt injection, recommandations ANSSI. La sécurité est intégrée dans sa façon de coder.'
        },
        {
            keywords: ['css moderne', 'tendance css', 'nouveau css', 'css 2025', 'container query', 'css avancé'],
            answer: 'Clayton suit les <strong>évolutions du CSS moderne</strong> : container queries, nouvelles propriétés, optimisations de performance et nouvelles techniques d\'architecture Front-End.'
        },

        // ── LE PORTFOLIO LUI-MÊME ─────────────────────────────────────────
        {
            keywords: ['portfolio', 'ce site', 'ton site', 'site web', 'ce portfolio', 'comment fait', 'créé comment', 'technologies portfolio'],
            answer: 'Ce <strong>portfolio</strong> est entièrement créé par Clayton en HTML, CSS et JavaScript vanilla. Il utilise :\n\n• <strong>ScrollReveal</strong> — animations au scroll\n• <strong>Swiper.js</strong> — carousel de certifications\n• <strong>CSS animations</strong> — effets visuels sur-mesure\n• <strong>Video background</strong> — section hero immersive\n• <strong>Cursor personnalisé</strong> — UX soignée\n• <strong>Glassmorphism</strong> — design moderne'
        },
        {
            keywords: ['preloader', 'chargement', 'loader', 'écran chargement'],
            answer: 'L\'animation de <strong>chargement (preloader)</strong> visible au lancement du portfolio est une création CSS/JS de Clayton — une de ses signatures visuelles.'
        },
        {
            keywords: ['cursor', 'souris', 'curseur', 'curseur personnalisé', 'custom cursor'],
            answer: 'Le <strong>curseur personnalisé</strong> du portfolio (le cercle qui suit la souris) est un effet CSS/JS custom créé par Clayton pour une expérience utilisateur soignée et distinctive.'
        },
        {
            keywords: ['vidéo', 'video', 'background video', 'fond vidéo', 'video hero', 'fond animé'],
            answer: 'La <strong>vidéo en arrière-plan</strong> de la section d\'accueil donne une ambiance immersive au portfolio. C\'est un choix artistique de Clayton pour une première impression mémorable.'
        },
        {
            keywords: ['dark mode', 'mode sombre', 'thème sombre', 'theme sombre', 'fond noir', 'dark theme'],
            answer: 'Le portfolio adopte un <strong>thème sombre (dark)</strong> avec un fond très foncé (#0f0f1a), des accents violet-bleu et des effets de lumière — une esthétique moderne et immersive choisie par Clayton.'
        },
        {
            keywords: ['section', 'sections', 'navbar', 'navigation', 'menu', 'accueil', 'à propos', 'contact section'],
            answer: 'Le portfolio de Clayton est organisé en sections :\n\n• <strong>Accueil</strong> — Hero avec vidéo background\n• <strong>À propos</strong> — Profil et informations\n• <strong>Compétences</strong> — Barres de progression et outils\n• <strong>Projets</strong> — Grille de projets avec modales\n• <strong>Certifications</strong> — Carousel Swiper\n• <strong>Créations</strong> — Galerie design\n• <strong>Parcours</strong> — Timeline\n• <strong>Veille</strong> — Articles tech\n• <strong>Contact</strong> — Formulaire'
        },

        // ── SERVICES ─────────────────────────────────────────────────────
        {
            keywords: ['service', 'services', 'propose', 'offre', 'prestation', 'prestations', 'réalise', 'realise', 'peut faire'],
            answer: 'Clayton propose les services suivants :\n\n• <strong>Création de sites vitrines</strong>\n• <strong>Création d\'identités visuelles</strong>\n• <strong>Développement de sites complets</strong>\n• <strong>Design UI/UX</strong>\n• <strong>Responsive design</strong>\n• <strong>Refonte de sites existants</strong>\n• <strong>Développement WordPress</strong>\n• <strong>Intégration HTML/CSS/JS</strong>'
        },
        {
            keywords: ['site vitrine', 'vitrine', 'site de présentation', 'site présentation'],
            answer: 'Clayton crée des <strong>sites vitrines professionnels</strong> : design sur-mesure, animations soignées, responsive et optimisé. Il a réalisé plusieurs sites vitrines dans des secteurs variés (artisanat, restauration, services...).'
        },
        {
            keywords: ['refonte', 'refaire', 'moderniser', 'améliorer site', 'amélioration site', 'mise à jour site'],
            answer: 'Clayton propose des <strong>refontes de sites web</strong> : modernisation du design, amélioration des performances, mise à jour des contenus. Exemples : refonte du site de courtiers immobiliers (WordPress) et du site d\'artisans en charpente.'
        },

        // ── QUESTIONS MÉTA ────────────────────────────────────────────────
        {
            keywords: ['comment tu fonctionnes', 'comment tu marches', 'comment ca marche', 'comment ça marche', 'tu es une ia', 'es tu une ia', 'robot', 'bot', 'chatbot', 'qui es-tu toi'],
            answer: 'Je suis l\'<strong>assistant FAQ</strong> du portfolio de Clayton ! Je réponds aux questions sur son profil, ses compétences, projets et certifications. Je fonctionne avec une base de connaissances locale — pas d\'IA externe. Pour toute question complexe, Clayton est disponible directement via le <strong>formulaire de contact</strong>.'
        },
        {
            keywords: ['question', 'demande', 'interrogation', 'savoir plus', 'en savoir plus', 'plus d\'info', 'plus info', 'renseignement'],
            answer: 'N\'hésitez pas à poser votre question ! Je connais le portfolio de Clayton dans les moindres détails : compétences, projets, certifications, parcours, créations, contact... Qu\'est-ce que vous voulez savoir ?'
        },
    ];

    const FALLBACK_RESPONSES = [
        'Je n\'ai pas la réponse à cette question précise. Je peux vous renseigner sur les <strong>compétences</strong>, <strong>projets</strong>, <strong>certifications</strong>, le <strong>parcours</strong>, les <strong>créations</strong> ou pour <strong>contacter Clayton</strong>.',
        'Cette question dépasse mes connaissances ! Essayez de me demander ses <strong>compétences</strong>, ses <strong>projets</strong> ou comment le <strong>contacter</strong> directement.',
        'Je ne suis pas sûr de comprendre. Reformulez ou demandez-moi par exemple : "Quels sont ses projets ?" ou "Comment contacter Clayton ?"'
    ];

    let fallbackIndex = 0;

    const SUGGESTIONS = [
        'Ses compétences ?',
        'Ses projets ?',
        'Ses certifications ?',
        'Son parcours ?',
        'Le contacter ?',
    ];

    const WELCOME_MSG = 'Bonjour ! Je suis l\'assistant du portfolio de Clayton FOIN-JOLIVET 👋\n\nPosez-moi vos questions sur ses <strong>compétences</strong>, <strong>projets</strong>, <strong>certifications</strong>, son <strong>parcours</strong> ou ses <strong>créations</strong> !';

    // =============================================
    // MOTEUR FAQ — SCORING AVANCÉ
    // =============================================
    function normalize(str) {
        return str.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/['']/g, ' ');
    }

    function getAnswer(userText) {
        const text = normalize(userText);
        let bestMatch = null;
        let bestScore = 0;

        for (const entry of FAQ) {
            let score = 0;
            let matchCount = 0;
            for (const keyword of entry.keywords) {
                const kw = normalize(keyword);
                if (text.includes(kw)) {
                    score += kw.length * 2;   // favorise les mots-clés longs et précis
                    matchCount++;
                }
            }
            // Bonus si plusieurs mots-clés matchent
            if (matchCount > 1) score += matchCount * 3;

            if (score > bestScore) {
                bestScore = score;
                bestMatch = entry;
            }
        }

        if (bestScore > 0) return bestMatch.answer;

        // Rotation des messages de fallback
        const msg = FALLBACK_RESPONSES[fallbackIndex % FALLBACK_RESPONSES.length];
        fallbackIndex++;
        return msg;
    }

    // =============================================
    // ETAT
    // =============================================
    let isOpen    = false;
    let firstOpen = true;

    // =============================================
    // ELEMENTS DOM
    // =============================================
    let toggleBtn, window_, messagesContainer, inputEl, sendBtn, suggestionsEl, badge;

    // =============================================
    // INIT
    // =============================================
    function init() {
        injectHTML();
        cacheElements();
        bindEvents();
        setTimeout(() => {
            if (!isOpen && badge) badge.classList.remove('hidden');
        }, 3000);
    }

    function injectHTML() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
        <button class="chatbot-toggle" id="chatbotToggle" aria-label="Ouvrir le chat">
            <i class="fas fa-robot"></i>
            <span class="chatbot-badge hidden" id="chatbotBadge">1</span>
        </button>
        <div class="chatbot-window" id="chatbotWindow" role="dialog" aria-label="Chat assistant">
            <div class="chatbot-header">
                <div class="chatbot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="chatbot-header-info">
                    <h4>Assistant Portfolio</h4>
                    <span>En ligne</span>
                </div>
                <button class="chatbot-close-btn" id="chatbotClose" aria-label="Fermer">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chatbot-messages" id="chatbotMessages"></div>
            <div class="chatbot-suggestions" id="chatbotSuggestions"></div>
            <div class="chatbot-input-area">
                <textarea
                    class="chatbot-input"
                    id="chatbotInput"
                    placeholder="Posez votre question..."
                    rows="1"
                    aria-label="Message"
                ></textarea>
                <button class="chatbot-send-btn" id="chatbotSend" aria-label="Envoyer">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
            <div class="chatbot-footer">Assistant Portfolio &nbsp;·&nbsp; Clayton FOIN-JOLIVET</div>
        </div>`;
        document.body.appendChild(wrapper);
    }

    function cacheElements() {
        toggleBtn         = document.getElementById('chatbotToggle');
        window_           = document.getElementById('chatbotWindow');
        messagesContainer = document.getElementById('chatbotMessages');
        inputEl           = document.getElementById('chatbotInput');
        sendBtn           = document.getElementById('chatbotSend');
        suggestionsEl     = document.getElementById('chatbotSuggestions');
        badge             = document.getElementById('chatbotBadge');
    }

    function bindEvents() {
        toggleBtn.addEventListener('click', toggleChat);
        document.getElementById('chatbotClose').addEventListener('click', closeChat);
        sendBtn.addEventListener('click', handleSend);
        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        });
        inputEl.addEventListener('input', () => {
            inputEl.style.height = 'auto';
            inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + 'px';
        });
        document.addEventListener('click', (e) => {
            if (isOpen && !window_.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
                closeChat();
            }
        });
    }

    // =============================================
    // TOGGLE / OPEN / CLOSE
    // =============================================
    function toggleChat() { isOpen ? closeChat() : openChat(); }

    function openChat() {
        isOpen = true;
        window_.classList.add('is-open');
        toggleBtn.classList.add('is-open');
        toggleBtn.querySelector('i').className = 'fas fa-times';
        badge.classList.add('hidden');
        if (firstOpen) {
            firstOpen = false;
            renderSuggestions();
            setTimeout(() => addMessage('bot', WELCOME_MSG), 300);
        }
        setTimeout(() => inputEl.focus(), 350);
    }

    function closeChat() {
        isOpen = false;
        window_.classList.remove('is-open');
        toggleBtn.classList.remove('is-open');
        toggleBtn.querySelector('i').className = 'fas fa-robot';
    }

    // =============================================
    // MESSAGES
    // =============================================
    function addMessage(role, text) {
        const msgEl = document.createElement('div');
        msgEl.className = `chatbot-message ${role}`;

        const avatarEl = document.createElement('div');
        avatarEl.className = 'chatbot-message-avatar';
        avatarEl.innerHTML = role === 'bot' ? '<i class="fas fa-robot"></i>' : 'V';

        const bubbleEl = document.createElement('div');
        bubbleEl.className = 'chatbot-message-bubble';
        bubbleEl.innerHTML = text.replace(/\n/g, '<br>');

        if (role === 'bot') {
            msgEl.appendChild(avatarEl);
            msgEl.appendChild(bubbleEl);
        } else {
            msgEl.appendChild(bubbleEl);
            msgEl.appendChild(avatarEl);
        }

        messagesContainer.appendChild(msgEl);
        scrollToBottom();
    }

    function showTyping() {
        const el = document.createElement('div');
        el.className = 'chatbot-message bot chatbot-typing';
        el.id = 'chatbotTyping';
        el.innerHTML = `
            <div class="chatbot-message-avatar"><i class="fas fa-robot"></i></div>
            <div class="chatbot-typing-dots">
                <span class="chatbot-typing-dot"></span>
                <span class="chatbot-typing-dot"></span>
                <span class="chatbot-typing-dot"></span>
            </div>`;
        messagesContainer.appendChild(el);
        scrollToBottom();
    }

    function hideTyping() {
        const el = document.getElementById('chatbotTyping');
        if (el) el.remove();
    }

    // =============================================
    // SUGGESTIONS
    // =============================================
    function renderSuggestions() {
        SUGGESTIONS.forEach((s) => {
            const btn = document.createElement('button');
            btn.className = 'chatbot-suggestion-btn';
            btn.textContent = s;
            btn.addEventListener('click', () => {
                suggestionsEl.style.display = 'none';
                handleMessage(s);
            });
            suggestionsEl.appendChild(btn);
        });
    }

    // =============================================
    // ENVOI
    // =============================================
    function handleSend() {
        const text = inputEl.value.trim();
        if (!text) return;
        inputEl.value = '';
        inputEl.style.height = 'auto';
        suggestionsEl.style.display = 'none';
        handleMessage(text);
    }

    function handleMessage(text) {
        addMessage('user', text);
        sendBtn.disabled = true;
        showTyping();
        setTimeout(() => {
            hideTyping();
            addMessage('bot', getAnswer(text));
            sendBtn.disabled = false;
            inputEl.focus();
        }, 550);
    }

    // =============================================
    // UTILITAIRES
    // =============================================
    function scrollToBottom() {
        requestAnimationFrame(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        });
    }

    // =============================================
    // LANCEMENT
    // =============================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
