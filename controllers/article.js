const Article = require('../models/articles');
const { messages } = require('../tools/messages');
const {
  ForbiddenErr,
  BadRequestErr,
  NotFoundErr,
} = require('../errors');

const createArticle = (req, res, next) => {
  Article.create({
    keyword: req.body.keyword,
    title: req.body.title,
    text: req.body.text,
    date: req.body.date,
    source: req.body.source,
    link: req.body.link,
    image: req.body.image,
    owner: req.user._id,
  })
    .then((article) => {
      res.send({
        status: '201',
        data: {
          id: article._id,
          keyword: article.keyword,
          title: article.title,
          text: article.text,
          date: article.date,
          source: article.source,
          link: article.link,
          image: article.image,
        },
      });
    })
    .catch((err) => next(new BadRequestErr(err.message)));
};

const getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.send({ data: articles }))
    .catch(next);
};

const deleteArticle = (req, res, next) => {
  Article.findById(req.params.id)
    .select('+owner')
    .orFail(() => new NotFoundErr(messages.article.id.isNotFound))
    .then((article) => {
      if (article.owner._id.toString() !== req.user._id) {
        throw new ForbiddenErr(messages.article.isForbidden);
      }
      return Article.deleteOne(article)
        .then(() => res.send({ status: '200', message: messages.article.isSuccessful }))
        .catch(next);
    })
    .catch(next);
};

module.exports = {
  getArticles,
  createArticle,
  deleteArticle,
};
