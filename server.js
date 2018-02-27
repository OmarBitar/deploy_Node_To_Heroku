var express = require('express');
var app = express();
var adminRouter = express.Router();
var bodyParser = require('body-parser');
var http = require('http');

var port = process.env.port || 8080;
//middleware to use for all requests
adminRouter.use(function(req,res,next){
    console.log('a new user visit');
    next();
});

app.route('/api')
.get(function(req,res){
    //set json object response
    res.setHeader('Content-Type','text/plain');
    res = res.status(200);
    res.json({message: 'hello from the get'});
})

.post(function(req,res){
    res.setHeader('Content-Type','text/plain');
    res = res.status(200);
    res.json({message: 'hello from the post'});
})

.put(function(req,res){
    res.setHeader('Content-Type','text/plain');
    res = res.status(200);
    res.json({message: 'hello from the put'});
})

.delete(function(req,res){
    res.setHeader('Content-Type','text/plain');
    res = res.status(200);
    res.json({message: 'hello from the delete'});
})


app.use(adminRouter).listen(port);
console.log('server created on port 8080');