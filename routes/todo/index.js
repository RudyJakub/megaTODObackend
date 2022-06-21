const todo = require('express').Router()
const mongoose = require('mongoose');


const getAll = (req, res) => {
    const TodoItemModel = mongoose.model('TodoItemModel')
    TodoItemModel.find()
    .lean()
    .exec()
    .then((todoItems) => {
        return res.status(200).json(todoItems);
    }).catch(() => {
        return res.status(404).send("Not found.")
    })
}

const getOne = (req, res) => {
    const TodoItemModel = mongoose.model('TodoItemModel')
    TodoItemModel.findOne({ _id: req.params.id })
    .lean()
    .exec()
    .then((todo) => {
        return res.status(200).json(todo);
    }).catch(() => {
        return res.status(404).send("Todoitem does not exist.")
    })
}

const createOne = (req, res) => {
    const TodoItemModel = mongoose.model('TodoItemModel')
    const TodoItem = new TodoItemModel({
        title: req.body.title,
        content: req.body.content,
        priority: req.body.priority || 1,
    })
    TodoItem.save((err) => {
        if (err) {
            return res.status(403).json({"error": err})
        }
        res.status(201).json(TodoItem)
    })
}

const deleteOne = (req, res) => {
    const TodoItemModel = mongoose.model('TodoItemModel')
    TodoItemModel.findOne({ _id: req.params.id }, (err, todo) => {
        if (err) return res.status(500).send(err)
        if (!todo) return res.status(404).send("Todoitem does not exist.")
        todo.delete()
        const response = {
            success: true,
            message: 'Note successfully deleted',
        }
        return res.status(204).send(response)
    })
}

const updateOne = (req, res) => {
    const TodoItemModel = mongoose.model('TodoItemModel')
    TodoItemModel.findOne({ _id: req.params.id }, (err, todo) => {
        if (err) return res.status(500).send(err)
        if (!todo) return res.status(404).send("Todoitem does not exist.")
        todo.title = req.body.title || todo.title
        todo.content = req.body.content || todo.content
        todo.priority = req.body.content || todo.priority
        todo.done = req.body.done || todo.done
        todo.updated_date = Date.now()
        todo.save()
        return res.status(200).send(todo)
    })
}


todo.get('/', getAll)
todo.get('/:id', getOne)
todo.post('/', createOne)
todo.put('/:id', updateOne)
todo.delete('/:id', deleteOne)

module.exports = todo;
