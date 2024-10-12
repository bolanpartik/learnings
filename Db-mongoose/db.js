const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
})

const Todo = new Schema({
    title: String,
    isDone: Boolean,
    userId: ObjectId
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    TodoModel
}

