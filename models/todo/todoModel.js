const mongoose = require('mongoose')

const TodoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Enter title"
    },
    content: {
        type: String,
        required: "Enter content"
    },
    priority: {
        type: Number,
        default: 1
    },
    done: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    updated_date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = TodoItemSchema
