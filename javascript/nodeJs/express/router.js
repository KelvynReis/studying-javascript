const express = require('express');
const route = express.Router();
const homeController = require('./src/controller/homeController');

route.get('/', homeController.homePage);
route.post('/', homeController.pagePost);

module.exports = route;