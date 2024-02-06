/// todo : string
/// descriptio  : string
// completed : boolean 


const mongoose = require("mongoose")
const { string, boolean } = require('zod')

// mongodb+srv://animeshkakoty07:kakoty69@cluster0.zjl81yu.mongodb.net/
mongoose.connect("mongodb+srv://animeshkakoty07:kakoty69@cluster0.zjl81yu.mongodb.net/")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}