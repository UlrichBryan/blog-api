# Blog API

## Description

Blog API est une API REST développée avec Node.js, Express et MySQL.
Elle permet de gérer des articles de blog avec les opérations CRUD (Create, Read, Delete).

Cette API permet de :

* créer un article
* voir tous les articles
* voir un article par ID
* supprimer un article

---

## Technologies utilisées

* Node.js
* Express.js
* MySQL
* MySQL Workbench
* Postman

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/UlrichBryan/blog-api.git
```

### 2. Aller dans le dossier

```bash
cd blog-api
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Configurer la base de données MySQL

Créer une base de données :

```sql
CREATE DATABASE blog_api;
```

Créer la table :

```sql
CREATE TABLE articles (
 id INT AUTO_INCREMENT PRIMARY KEY,
 titre VARCHAR(255) NOT NULL,
 contenu TEXT NOT NULL,
 auteur VARCHAR(100) NOT NULL,
 categorie VARCHAR(100),
 tags VARCHAR(255),
 date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Lancer le serveur

```bash
node app.js
```

Le serveur démarre sur :

```
http://localhost:3000
```

---

# API Endpoints

## Créer un article

POST /api/articles

Body JSON :

```json
{
 "titre": "Node.js API",
 "contenu": "Learning backend development",
 "auteur": "Bryan",
 "categorie": "Tech",
 "tags": "node,api"
}
```

---

## Voir tous les articles

GET /api/articles

---

## Voir un article par ID

GET /api/articles/:id

---

## Supprimer un article

DELETE /api/articles/:id

---

# Structure du projet

```
blog-api
│
├── app.js
├── package.json
├── README.md
│
├── config
│   └── db.js
│
├── controllers
│   └── articleController.js
│
├── routes
│   └── articleRoutes.js
```

---

# PARTIE 3 : Analyse critique de CleeRoute

## Points forts

CleeRoute permet d’organiser les routes d’une API de manière claire et structurée.
Il améliore la lisibilité du code et facilite la gestion des endpoints.

Avantages :

* organisation claire des routes
* meilleure structure du projet
* réduction de la duplication du code

## Points faibles

Malgré ses avantages, CleeRoute présente certaines limites :

* documentation limitée
* communauté encore réduite
* peu de tutoriels disponibles

## Améliorations possibles

Pour améliorer cet outil, il serait utile de :

* proposer plus de documentation
* ajouter des exemples de projets
* améliorer l’intégration avec les frameworks populaires

## Utilité pour un étudiant en informatique

Pour un étudiant en informatique, CleeRoute permet de mieux comprendre la gestion des routes dans une API REST.
Il aide également à apprendre les bonnes pratiques de structuration d’un projet backend.

---

# Auteur

Ulrich Bryan
