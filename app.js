const express = require('express')
const app = express()
const port = 3000
let appRoute = require('./app/routes/index')

app.use(express.json())
app.use('/', appRoute)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })
  
