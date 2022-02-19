//DEPENDENCIES
import express from 'express'
import cors from 'cors'
import todosController from './controllers/todos_controller'

//APPLICATION
const app = express()

//MIDDLEWARE/CONFIG
app.use(express.json())
app.use(cors())

//ROUTES

app.use('/todos', todosController)

app.use('*', (req, res) => {
    res.status(404).send("Sorry! The page requested was not found.")
})

export default app