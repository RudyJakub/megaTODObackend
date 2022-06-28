require('./db/db.connect')

const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000
const projName = "expressTODO"

app.use(cors())
app.use('/', routes)

app.use((err, req, res, next) => {
  res.status(err.status || 400).json({
    success: false,
    message: err.message || 'An error occured.',
    errors: err.error || [],
  })
})


app.listen(port, () => {
  console.log(`${projName} is running on: http://localhost:${port}`)
})
