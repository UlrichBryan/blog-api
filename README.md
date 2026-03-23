# blog-api
REST API for blog articles using Node.js, Express and MySQL

# API Endpoints
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

