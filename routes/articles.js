const router = require('express').Router();
const { celebrate } = require('celebrate');
const { auth } = require('../middlewares/auth');
const {
  getArticles, createArticle, deleteArticle,
} = require('../controllers/article');
const { objectIdJoi, articleJoi } = require('../celebrate');

router.use(auth);

router.get('/', celebrate({ params: objectIdJoi }), getArticles);
router.post('/', celebrate({ body: articleJoi }), createArticle);
router.delete('/:id', celebrate({ params: objectIdJoi }), deleteArticle);

module.exports = router;
