var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost/bookAPI');
var Book= require('./models/bookModel');

var app = express();

var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



var bookRouter= require('./Routes/bookRoutes')(Book);

app.use('/api/books',bookRouter);
//app.use('/api/authors',authorRouter);

app.get('/', function(req, res){
    res.send('welcome to my API!');
});

app.listen(port, function(){
    console.log('Gulp is running my app on  PORT: ' + port);
});