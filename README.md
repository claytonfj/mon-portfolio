# Portfolio Clayton Foin-Jolivet

> **[Voir le site en ligne](https://claytonfj.github.io/mon-portfolio/)**

Portfolio personnel moderne et interactif, concu avec un design sombre et des animations immersives. Le site met en avant mes competences, projets et parcours en tant que developpeur web Full-Stack.

---

## Apercu

| Desktop | Mobile |
|---------|--------|
| Robot 3D interactif, curseur personnalise, particules animees | Interface responsive, navigation tactile optimisee |

---

## Fonctionnalites

### Robot 3D Interactif
- Modele 3D charge via **Spline Runtime** qui suit les mouvements de la souris
- Preloader anime avec fallback automatique (8s timeout)
- Masque sur mobile/tablette pour les performances

### Systeme de Particules
- Animation canvas avec particules dynamiques
- Effet de glow radial qui suit le curseur
- Redimensionnement adaptatif au viewport

### Curseur Personnalise (Desktop)
- Double couche : curseur principal + suiveur avec interpolation fluide
- Effets de survol sur les elements interactifs
- Desactive automatiquement sur les appareils tactiles

### Sections du Site

| Section | Description |
|---------|-------------|
| **Hero** | Titre anime avec robot 3D, particules et indicateur de scroll |
| **A propos** | Presentation, infos personnelles et lien vers le CV |
| **Competences** | 10 barres de progression + carrousel infini d'outils |
| **Projets** | Grille de 9+ projets avec modales detaillees et bouton "Voir plus" |
| **Certifications** | Carrousel Swiper 3D (Coverflow) avec 11+ certifications |
| **Parcours** | Timeline verticale style Aceternity avec animation au scroll |
| **Veille Informatique** | Articles filtres sur l'IA generative (video, image, outils) |
| **Creations** | Galerie avec lightbox, navigation clavier et compteur |
| **Contact** | Formulaire avec envoi PHP + coordonnees et reseaux sociaux |

### Chatbot FAQ
- Base de connaissances extensive (~50KB)
- Reponses par correspondance de mots-cles
- Couvre : identite, competences, projets, certifications, disponibilite, tarifs

---

## Stack Technique

### Frontend
| Technologie | Utilisation |
|-------------|-------------|
| **HTML5** | Structure semantique, accessibilite (ARIA) |
| **CSS3** | Variables CSS, gradients, glassmorphism, animations |
| **JavaScript (Vanilla)** | Architecture modulaire, pas de framework |

### Backend
| Technologie | Utilisation |
|-------------|-------------|
| **PHP** | Traitement du formulaire de contact, validation, envoi d'emails |

### Librairies Externes
| Librairie | Version | Role |
|-----------|---------|------|
| [Spline Runtime](https://spline.design/) | 1.12.69 | Rendu du robot 3D |
| [Swiper](https://swiperjs.com/) | Latest | Carrousel certifications (Coverflow 3D) |
| [ScrollReveal](https://scrollrevealjs.org/) | Latest | Animations d'apparition au scroll |
| [Font Awesome](https://fontawesome.com/) | 6.4.0 | Icones |
| [Google Fonts](https://fonts.google.com/) | - | Police Poppins (300-700) |

---

## Architecture du Projet

```
Portfolio_Clayton_2026_3D/
├── index.html                  # Redirection vers HTML/
├── contact-form.php            # Backend formulaire de contact
│
├── HTML/
│   ├── index.html              # Page principale
│   └── mentionslegales.html    # Mentions legales
│
├── CSS/                        # Styles modulaires (19 fichiers)
│   ├── base.css                # Variables, reset, tokens
│   ├── hero.css                # Section hero
│   ├── about.css               # Section a propos
│   ├── skills.css              # Competences & barres
│   ├── projects.css            # Grille projets
│   ├── certifications.css      # Carrousel certifications
│   ├── timeline.css            # Parcours (timeline)
│   ├── veille.css              # Veille informatique
│   ├── chatbot.css             # Chatbot FAQ
│   ├── gallery.css             # Galerie lightbox
│   ├── responsive.css          # Breakpoints & mobile
│   └── ...                     # Autres composants
│
├── JS/                         # Scripts modulaires (16 fichiers)
│   ├── main.js                 # Point d'entree, initialisation
│   ├── spline-hero.js          # Robot 3D Spline
│   ├── cursor.js               # Curseur personnalise
│   ├── animations.js           # Animations hero
│   ├── project-modal.js        # Modales projets
│   ├── chatbot.js              # Chatbot FAQ
│   └── ...                     # Autres modules
│
└── IMAGES/                     # Assets optimises
    ├── *.png                   # Logos, mockups, captures
    ├── *.avif                  # Certifications (compression moderne)
    ├── *.jpg                   # Backgrounds, screenshots
    └── CV.pdf                  # Curriculum vitae
```

---

## Performance & Optimisation

- **Lazy loading** sur toutes les images
- **Preconnect** vers les CDN externes
- **Format AVIF** pour les images de certifications
- **Listeners passifs** pour le scroll et les evenements souris
- **RequestAnimationFrame** pour les animations fluides
- **Scripts modulaires** sans framework lourd

---

## Responsive Design

| Breakpoint | Adaptations |
|------------|-------------|
| **> 1200px** | Layout complet avec robot 3D et curseur personnalise |
| **<= 1200px** | Sections empilees, robot 3D masque |
| **<= 768px** | Menu hamburger, grilles adaptees, boutons centres |
| **<= 576px** | Typographie reduite, layout simplifie |
| **<= 480px** | Optimisations pour petits ecrans |
| **Touch** | Curseur personnalise desactive, interactions tactiles |

---

## Deploiement

Le site est heberge sur **GitHub Pages** et deploye automatiquement depuis la branche `main`.

```
https://claytonfj.github.io/mon-portfolio/
```

---

## Auteur

**Clayton Foin-Jolivet** - Developpeur Web Full-Stack

- Email : claytonfjpro@gmail.com
- Telephone : +33 6 56 80 54 27
- GitHub : [@claytonfj](https://github.com/claytonfj)
