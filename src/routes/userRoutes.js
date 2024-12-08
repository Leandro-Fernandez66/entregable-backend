const express = require('express');
const { getAllUsersController } = require('../controllers/userController');
const routes = express.Router();

routes.get('', getAllUsersController);

module.exports = routes;