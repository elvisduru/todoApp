var mongoose = require('mongoose')
mongoose.connect('mongodb://elvisduru:buildthefuture123@ds227332.mlab.com:27332/todo-app-elvis', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');