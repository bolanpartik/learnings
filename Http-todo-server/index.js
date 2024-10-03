const express = require('express')
const app = express()

let todos = [];
let id = 0;

// enables express to parse incoming JSON request bodies
app.use(express.json())

app.get('/todos', function (req, res) {
    if (todos.length === 0) {
        return res.status(200).json([])
    } else {

        return res.status(200).json({
                todos
            })
    }
})

app.post('/create', function (req, res) {
    const reqTitle = req.body.title
    if (reqTitle === undefined || reqTitle === '') {
        return res.status(400).json({
                    message: 'Title is required.'
                })
    } else {
        todos.push({
            id: id,
            title: reqTitle
        })
        id = id + 1;
        return res.status(200).send('Todo added sucessfully')
    }
})

app.put('/update', function (req, res) {
    console.log(req.body.id)
    console.log(req.body.title)
    if (req.body.id === undefined || req.body.title === '') {
        return res.status(400).json({
            message: 'Id or title is required'
        })
    } else {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === req.body.id) {
                return {
                    id: todo.id,
                    title: req.body.title
                }
            } else {
                return todo
            }
        })
        todos = updatedTodos
        return res.status(200).send('Todo updated sucessfully')
    }
})

app.delete('/delete', function (req, res) {
    console.log(req.query.id)
    if (!req.query.id) {
        return res.status(400).json({
            message: 'Id is required'
        })
    } else {
        const updatedTodos = todos.filter((todo) => todo.id != req.query.id)
        todos = updatedTodos
        res.status(200).json({
            status: 200,
            msg: 'Delete done',
            todos
        })
    }
})

app.listen(3000)