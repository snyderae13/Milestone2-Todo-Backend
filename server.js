//DEPENDENCIES
import express from 'express'
import cors from 'cors'

//APPLICATION
const app = express()

//MIDDLEWARE/CONFIG
app.use(express.json())
app.use(cors())

//ROUTES

app.use('/todos', require('./controllers/todos_controller'))

app.use('*', (req, res) => {
    res.status(404).send("Sorry! The page requested was not found.")
})

export default app