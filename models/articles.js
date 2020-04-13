const mongoose = require('mongoose');
const validator = require('validator');

const articleSchema = new mongoose.Schema(
  {
    keyword: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    title: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    text: {
      type: String,
      minlength: 2,
      required: true,
    },
    date: {
      type: String,
      minlength: 2,
      required: true,
    },
    source: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true,
    },
    link: {
      type: String,
      validate: {
        validator: (link) => validator.isURL(link),
      },
      required: true,
    },
    image: {
      type: String,
      validate: {
        validator: (link) => validator.isURL(link),
      },
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
      select: false,
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('article', articleSchema);
