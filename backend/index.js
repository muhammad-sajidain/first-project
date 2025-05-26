const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const studentModel = require('./model/student')

const app = express()
app.use(express.json())
app.use(cors()) 

mongoose.connect("mongodb://127.0.0.1:27017/student")

app.post('/register', (req , res) =>{
    studentModel.create(req.body)
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})