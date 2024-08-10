Jeu d'échecs en HTML, CSS et JavaScript

Ce projet est une implémentation de base d'un jeu d'échecs utilisant uniquement du HTML, CSS et JavaScript. Le frontend est composé d'un tableau d'échecs de 8x8 cases avec les pièces d'échecs positionnées de manière standard.
Table des matières

    Aperçu
    Structure des fichiers
    Comment utiliser
    Fonctionnalités
    Améliorations futures
    Licence

Aperçu

Le projet consiste en une interface utilisateur simple pour un jeu d'échecs. Le tableau est créé à l'aide de CSS Grid, et les pièces sont représentées par des caractères Unicode.

Structure des fichiers

Le projet est organisé comme suit :

bash

.
├── jeu.html          # Fichier HTML principal
├── jeu.css           # Feuille de style CSS
└── README.md           # Ce fichier README

Comment utiliser

    Cloner le dépôt :

    bash

    git clone https://github.com/LLontsi/nom-du-repo.git
    cd nom-du-repo

    Ouvrir le fichier index.html dans votre navigateur pour voir le jeu d'échecs.

Fonctionnalités

    Plateau d'échecs : Un tableau d'échecs complet est créé avec des cases alternées de couleur.
    Pièces d'échecs : Les pièces sont positionnées au début du jeu avec les caractères Unicode correspondants.

Améliorations futures

    Ajouter de l'interactivité : Utilisation de JavaScript pour permettre le déplacement des pièces selon les règles du jeu d'échecs.
    Système de gestion des tours : Implémentation de la logique de tour par joueur.
    Détection des échecs et des échecs et mats : Ajout de la logique de jeu pour détecter ces situations.

Licence

Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
