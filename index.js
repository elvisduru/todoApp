var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/views")));
app.use(express.static(path.join(__dirname, "/public")));

var todosRoute = require('./routes/todos');

app.use('/api/todos', todosRoute);

app.get('/', function(req, res) {
	res.sendFile("index.html");
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log("APP IS RUNNING ON PORT " + PORT);
});