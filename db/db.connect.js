const mongoose = require('mongoose');

// const TodoItemSchema = require.main.require('./models/user')

const TodoItemSchema = require('../models/todo/todoModel')

const db = require('./db.config')

mongoose.connect(`mongodb://${db.host}/${db.name}`, db.opts)

mongoose.connection.on('connected', () => {
  mongoose.model('TodoItemModel', TodoItemSchema)
})

