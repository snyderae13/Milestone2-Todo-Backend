import express from 'express'
import TodosController from './todos_controller.js'

const router = express.Router();

router.route('/').get(TodosController.GetTodos);

router.route('/todos').get(TodosController.GetTodos);

router.route('/todos/priorities').get(TodosController.GetTodos);

router.route('/todos/duedates').get(TodosController.GetTodos);

router.route('/todos/:id').put(TodosController.UpdateTodo).delete(TodosController.DeleteTodo)

export default router;