const db = require("../config/db");

const Article = {

create: (data, callback) => {

const sql = `
INSERT INTO articles (titre, contenu, auteur, categorie, tags)
VALUES (?, ?, ?, ?, ?)
`;

db.query(sql, [
data.titre,
data.contenu,
data.auteur,
data.categorie,
data.tags
], callback);

},

getAll: (callback) => {

db.query("SELECT * FROM articles", callback);

},

getById: (id, callback) => {

db.query("SELECT * FROM articles WHERE id = ?", [id], callback);

},

update: (id, data, callback) => {

const sql = `
UPDATE articles
SET titre=?, contenu=?, categorie=?, tags=?
WHERE id=?
`;

db.query(sql, [
data.titre,
data.contenu,
data.categorie,
data.tags,
id
], callback);

},

delete: (id, callback) => {

db.query("DELETE FROM articles WHERE id = ?", [id], callback);

}

};

module.exports = Article;
