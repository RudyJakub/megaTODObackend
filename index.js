const express = require('express')
// import { ... } from "./controllers/todo/todoController"
const bodyParser = require('body-parser')

const app = express()
const port = 3000
const projName = "expressTODO"

app.use(bodyParser.json())

// app.route("/todo").get(getAllTodos).post(addTodo)
// app.route("/todo/:todoID").get(getTodo).put(updateTodo).delete(deleteTodo)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`${projName} is running on: http://localhost:${port}`)
})
