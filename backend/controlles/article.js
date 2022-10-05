const articles = require("../models/article");

exports.Addarticle = async (req, res) => {
  try {
    const article = new articles(req.body);
    await article.save();
    res.status(200).send({ msg: "new article", article });
  } catch (error) {
    res.status(500).send({ msg: "couldn't add  article" });
  }
};
exports.Getarticles = async (req, res) => {
  try {
    const article = await articles.find();
    res.status(200).send({ msg: "our articles", article });
  } catch (error) {
    res.status(500).send({ msg: "could not get articles" });
  }
};
exports.Deletearticles = async (req, res) => {
  try {
    await articles.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "articles deleted" });
  } catch (error) {
    res.status(500).send({ msg: "cannot delete articles" });
  }
};
exports.Updatearticles = async (req, res) => {
  try {
    const article = await articles.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send({ msg: "articles updated", article });
  } catch (error) {
    res.status(500).send({ msg: "could not update articles" });
  }
};