const express = require('express');
const { createTodoController,
  getTodosController,
  getOneTodoController,
  updateTodoController,
  deleteTodoController
} = require('../controllers/todoController');

const routes = express.Router();

routes.post('', createTodoController);
routes.get('', getTodosController);
routes.get('/:id', getOneTodoController);
routes.put('/:id', updateTodoController);
routes.delete('/:id', deleteTodoController);

module.exports = routes;
