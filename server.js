//DEPENDENCIES
import express from 'express'
import cors from 'cors'

//APPLICATION
const app = express()

//MIDDLEWARE/CONFIG
app.use(express.json())
app.use(cors())

//ROUTES

app.use('*', (req, res) => {
    res.status(404).send("Sorry! Page that was requested was not found.")
})

export default app