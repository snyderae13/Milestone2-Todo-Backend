import TodoDAO from '../dao/todosDAO.js'

//Basic syntax we're going for?


class TodosController {
//Methods go in here - class static initialization blocks?
//Definitely missing a step, how to access each static block??
//try block contains code we want to execute

    //CREATE (form) - PostTodo
    static async PostTodo(req, res) {
        try{
            const name = req.body.name
            const priority = req.body.priority
            const dueDate = req.body.dueDate
            const description = req.body.description || ""
            const todo = {name: name, priority: priority, dueDate: dueDate, description:description} //key-value pairs

            const response = await TodoDAO.addTodo(todo)//how to add todo?

        } catch(err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

    //READ - GetTodos
    static async GetTodos(req, res) {
        try{
            const todoId = req.params.id

            const response = await TodoDAO.getTodos()//show id

        } catch(err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

    //UPDATE (form) - UpdateTodo
    static async UpdateTodo(req, res) {
        try{
            const todoId = req.params.id 
            const name = req.body.name
            const priority = req.body.priority
            const dueDate = req.body.dueDate
            const description = req.body.description || ""
            const todo = {name: name, priority: priority, dueDate: dueDate, description:description}
            

            const response = await TodoDAO.DAO.updateTodo(todoId, todo)//update task

        } catch(err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

    //DELETE - DeleteTodo
    static async DeleteTodo(req, res) {
        try{
            const todoId = req.params.id
            const response  = await TodoDAO.deleteTodo(todoId)//delete id

        } catch(err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

}


export default TodosController;