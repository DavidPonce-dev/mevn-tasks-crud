const express = require('express')
const app = express()

//settings
app.set('port', process.env.PORT || 3000)

//middlewares

//routes

//static files
app.use(express.static(__dirname + '\\public'))

//listen
app.listen(app.get('port'), () =>{
    console.log('server listen on port ' + app.get('port'))
})