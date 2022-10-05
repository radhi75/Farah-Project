const express = require("express");
const {
  Addarticle,
  Getarticles,
  Deletearticles,
  Updatearticles,
} = require("../controlles/article");
const articleRoute = express.Router();

articleRoute.post("/add", Addarticle);
articleRoute.get("/get", Getarticles);
articleRoute.delete("/del/:id", Deletearticles);
articleRoute.put("/put/:id", Updatearticles);

module.exports = articleRoute;