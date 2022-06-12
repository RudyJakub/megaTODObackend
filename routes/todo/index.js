const todo = require('express').Router()
const getsingle = require('./get')
const getall = require('./getAll')
const create = require('./create')
const remove = require('./delete')

// todo.get('/', getall)
todo.get('/:id', getsingle)
// todo.post('/', create)
// todo.delete('/:id', remove)

module.exports = todo;
