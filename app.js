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
    console.log('Успешное подключение к базе данных');
    const app = express();
    app.listen(port, () => {
      console.log(`Используемый порт: ${settings.PORT}`);
    });
    app.use(routes);
  }).catch((err) => {
    console.log('Ошибка подключения к базе данных:', err);
  });
