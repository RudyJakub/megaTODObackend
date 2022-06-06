import mongoose from "mongoose"

const Schema = mongoose.Schema

export const studentSchema = new Schema({
    title: {
        type: String,
        required: "Enter title"
    },
    content: {
        type: String,
        required: "Enter content"
    },
    done: {
        type: Boolean
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
