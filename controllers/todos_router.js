// Importing Dependecies and Controller that we need

import express from 'express'
import TodosController from './todos_controller.js'


// Express Router

const router = express.Router();

//Routes for our Todo List , all of them are get execpt for our : id which will have an update and a delete 

router.route('/').get(TodosController.GetTodos);

router.route('/todos').get(TodosController.GetTodos);

router.route('/todos/priorities').get(TodosController.GetTodos);

router.route('/todos/duedates').get(TodosController.GetTodos);

router.route('/todos/new').post(TodosController.PostTodos);

router.route('/todos/:id').put(TodosController.UpdateTodo).delete(TodosController.DeleteTodo)

export default router;