const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost/mevn-crud-db')
  .then(db => console.log('db connectada'))
  .catch(err => console.log(err))

//settings
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
const tasks = require('./routes/tasks')

app.use('/api/tasks', tasks)

//static files
app.use(express.static(__dirname + '\\public'))

//listen
app.listen(app.get('port'), () =>{
    console.log('server listen on port ' + app.get('port'))
})