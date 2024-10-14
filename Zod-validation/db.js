const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const User = new Schema({
    email:{
        type:String,
        unique:true
    },
    password:String
})

const Todo = new Schema({
    title:String,
    isDone:{
        type:Boolean,
        default:false
    },
    userId:ObjectId
})

const UserModel = mongoose.model('users',User)
const TodoModel = mongoose.model('todos',Todo)

module.exports ={
    UserModel,
    TodoModel
}