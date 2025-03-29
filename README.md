Jeux de dés

Projet de simulation d’un jeu de dés interactif, réalisé dans le cadre de ma formation. Ce projet m’a permis de mettre en pratique les bases du développement web, la logique JavaScript, la gestion des événements, et d’approfondir l’interaction entre le front-end et le back-end (si intégré).

---

Sommaire
• Objectifs du projet
• Fonctionnalités
• Technologies utilisées
• Structure du projet
• Déroulement du développement
• Installation et lancement
• Évolutions possibles
• Auteur

---

Objectifs du projet
• Simuler un jeu de dés à deux joueurs
• Gérer la logique du jeu : lancer de dés, score, tour par tour
• Ajouter des règles (score limite, perte de points, etc.)
• Travailler l’interface utilisateur
• Manipuler le DOM en JavaScript
• Mettre en place une base solide pour ajouter un back-end si besoin

---

Fonctionnalités
• Lancer un dé à chaque tour
• Affichage dynamique des scores et du joueur actif
• Gestion des tours de jeu
• Règles personnalisées (Les régles:
Le jeu comprend 2 joueurs sur un seul et même écran.
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le
résultat d’un lancer est ajouté au ROUND.
Lors de son tour, le joueur peut décider à tout moment de: - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur. - Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu.)
• Réinitialisation de la partie
• Interface responsive

---

-Réaliser une interface utilisateur web statique et adaptable:

    Utilisation de Html, Css, Sass et JavaScript pour rendre l'interface responsive et agréable
    Technologies utilisées
    •	HTML5 — structure de la page
    •	CSS3 / SCSS — stylisation et animations
    •	JavaScript (Vanilla) — logique du jeu, manipulation du DOM

-Développer une interface utilisateur web dynamique:

    Utilisation de Javascript et pour rendre le jeux dynamique et spontané

---

Déroulement du développement 1. Phase de conception
• Idée du jeu et définition des règles
• Maquettage simple de l’interface 2. Phase de développement
• Création de la structure HTML
• Mise en page et design en CSS / SCSS
• Implémentation de la logique en JavaScript
• Ajout des règles, tests, corrections 3. Fonctionnalités avancées
• Stockage des scores ou historique avec JSON (en local ou via PHP)
• Responsive design
• Optimisations diverses

---
