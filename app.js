require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const settings = require('./appconfig');
const routes = require('./routes/index');

mongoose.connect(settings.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})
  .then(() => {
    const app = express();
    app.listen(settings.PORT, () => {
      console.log(`Используемый порт: ${settings.PORT}`);
    });
    console.log('Успешное подключение к базе данных');
    app.use(routes);
  }).catch((err) => {
    console.log('Ошибка подключения к базе данных:', err);
  });
