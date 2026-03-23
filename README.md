# blog-api
REST API for blog articles using Node.js, Express and MySQL

## Description
Présentation du projet.

## Technologies utilisées
Node.js
Express
MySQL

## Installation
Instructions pour lancer le projet.

## API Endpoints
# Create Articles
POST /api/articles
Body
{
 "titre": "Node.js API",
 "contenu": "Learning backend development",
 "auteur": "Bryan",
 "categorie": "Tech",
 "tags": "node,api"
}

# GET All Articles
GET /api/articles

# Get Articles By ID
GET /api/articles/:id

# Delete Articles
DELETE /api/articles/:id

## PARTIE 3 : Analyse critique de CleeRoute
### Points forts

CleeRoute permet d'organiser les routes d'une API de manière claire et structurée. 
Il facilite la gestion des endpoints et améliore la lisibilité du code.

Avantages :
- organisation claire des routes
- meilleure maintenance du projet
- réduction de la duplication du code

### Points faibles
Malgré ses avantages, CleeRoute présente certaines limites :

- documentation limitée
- moins populaire que d'autres outils
- peu de tutoriels disponibles

### Améliorations possibles
Pour améliorer cet outil, on pourrait :

- ajouter plus de documentation
- fournir plus d'exemples pratiques
- améliorer l'intégration avec les frameworks populaires

### Utilité pour un étudiant en informatique
Pour un étudiant en informatique, CleeRoute permet de comprendre la structure des routes dans une API REST. 
Il aide également à organiser un projet backend de manière plus professionnelle.

## Auteur
UlrichBryan
