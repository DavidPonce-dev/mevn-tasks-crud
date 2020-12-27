const mongoose = require('mongoose')
const { Schema } = mongoose

const Task = new Schema({
    title: String,  
    desctiption: String
})

module.exports = mongoose.model('Task', Task)