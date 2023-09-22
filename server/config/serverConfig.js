const express = require('express');
const path = require('path');
const morgan = require('morgan');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionConfig = require('./sessionConfig');

const ssr = require('../middlewares/ssr');
const getUser = require('../middlewares/getUser');

function serverConfig(app) {
  /* мидлварка, которая позволит нам работать с куками на сервере */
  app.use(cookieParser());
  app.use(session(sessionConfig));

  /* мидлварка, чтобы посмотреть, кто у нас сидит на сайте */
  app.use(getUser);

  app.use(ssr);
  // Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на
  // сервер в консоль выводилась информация об этом запросе.
  app.use(morgan('dev'));
  // Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут
  // находится статические файлы, т.е.файлы доступные для скачивания из других приложений.
  app.use(express.static(path.join(__dirname, '../public')));
  // Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов
  // типа POST, PUT и DELETE.
  app.use(express.urlencoded({ extended: true }));
  // Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые
  // в формате JSON в body HTTP - запроса.
  app.use(express.json());
}

module.exports = serverConfig;
