const Article = require("../models/articleModel");

exports.createArticle = (req, res) => {

const data = req.body;

Article.create(data, (err, result)=>{

if(err){
return res.status(500).json(err);
}

res.status(201).json({
message: "Article created successfully",
id: result.insertId
});

});

};


exports.getArticles = (req,res)=>{

Article.getAll((err,result)=>{

if(err){
return res.status(500).json(err);
}

res.status(200).json(result);

});

};


exports.getArticleById = (req,res)=>{

const id = req.params.id;

Article.getById(id,(err,result)=>{

if(err){
return res.status(500).json(err);
}

if(result.length === 0){
return res.status(404).json({
message:"Article not found"
});
}

res.json(result[0]);

});

};


exports.updateArticle = (req,res)=>{

const id = req.params.id;
const data = req.body;

Article.update(id,data,(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:"Article updated"
});

});

};


exports.deleteArticle = (req,res)=>{

const id = req.params.id;

Article.delete(id,(err,result)=>{

if(err){
return res.status(500).json(err);
}

res.json({
message:"Article deleted"
});

});

};
