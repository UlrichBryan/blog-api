const express = require("express");
const mysql = require("mysql2");

const app = express();
app.use(express.json());

// Connexion MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Git47-ZRoot",
  database: "blog_api"
});

db.connect((err) => {
  if (err) {
    console.log("Database error:", err);
  } else {
    console.log("MySQL connected");
  }
});

// ROUTES API

// Créer un article
app.post("/api/articles", (req, res) => {

    console.log(req.body);

  const { titre, contenu, auteur, categorie, tags } = req.body;

  const sql = `
    INSERT INTO articles (titre, contenu, auteur, categorie, tags)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [titre, contenu, auteur, categorie, tags], (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.status(201).json({
      message: "Article created",
      id: result.insertId
    });

  });

});


// Lire tous les articles
app.get("/api/articles", (req, res) => {

  const sql = "SELECT * FROM articles";

  db.query(sql, (err, results) => {

    if (err) {
      console.log("SQL ERROR:", err);
  return res.status(500).json({
    error: err.message
        });
    }

    res.status(200).json(results);

  });

});


// Lire un article par ID
app.get("/api/articles/:id", (req, res) => {

  const sql = "SELECT * FROM articles WHERE id = ?";

  db.query(sql, [req.params.id], (err, results) => {

    if (err) {
      return res.status(500).json(err);
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(results[0]);

  });

});


// Supprimer un article
app.delete("/api/articles/:id", (req, res) => {

  const sql = "DELETE FROM articles WHERE id = ?";

  db.query(sql, [req.params.id], (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Article deleted"
    });

  });

});


// Démarrer le serveur
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
