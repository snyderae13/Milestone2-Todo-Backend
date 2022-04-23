import TodosDAO from '../dao/todosDAO'

class TodosController {

    //CREATE (form) - PostTodo
    static async PostTodo(req: any, res: any) {
        try{
            const name = req.body.name
            const priority = req.body.priority
            const dueDate = req.body.dueDate
            const description = req.body.description || ""
            console.log(req)

            const response = await TodosDAO.addTodo(name, priority, dueDate, description)
            res.json({status: "success"});

        } catch(err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

    //READ - GetTodos
    static async GetTodos(req: any, res: any) {
        try{
            // const todoId = req.params.id

            const response = await TodosDAO.getTodos('_id')
            res.json(response);

        } catch(err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

    //READ- GetTodosId

    static async GetTodosId(req: any, res: any) {
        try {
            const todoId = req.params.id

            const response = await TodosDAO.getTodosId(todoId)
            
            
            res.json(response);
        } catch (err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

    //UPDATE (form) - UpdateTodo
    static async UpdateTodo(req: any, res: any) {
        try{
            const todoId = req.params.id 
            const name = req.body.name
            const priority = req.body.priority
            const dueDate = req.body.dueDate
            const description = req.body.description || ""

            const response = await TodosDAO.updateTodo(todoId, name, priority, dueDate, description)
            res.json({status: "success"});

        } catch(err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

    //DELETE - DeleteTodo
    static async DeleteTodo(req: any, res: any) {
        try{
            const todoId = req.params.id
            const response  = await TodosDAO.deleteTodo(todoId)
            res.json({status: "success"});

        } catch(err) {
            console.log(err)
            res.status(404).send('Sorry! The page requested was not found.')
        }
    }

}

export default TodosController;