const mongoose = require('mongoose')

module.exports = (req, res, next) => {
    const TodoItemModel = mongoose.model('TodoItemModel');
    NoteModel.findOne({ _id: req.params.id })
    .lean()
    .exec()
    .then((todoitem) => {
    return res.status(200).json(todoitem)
    })
    .catch(() => next({ status: 404, message: 'Todoitem does not exists.' }))
}
