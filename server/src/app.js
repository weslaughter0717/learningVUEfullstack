var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')

var app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'working'
  })
})

app.listen(process.env.PORT || 8081)
