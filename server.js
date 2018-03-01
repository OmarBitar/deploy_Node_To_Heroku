var express = require('express');
var app = express();
var adminRouter = express.Router();
var bodyParser = require('body-parser');
var http = require('http');

var port = process.env.port || 8080;
//middleware to use for all requests
adminRouter.use(function(req,res,next){
    console.log('a new user visitor');
    next();
});

function getReturnData(req) {
    var obj = {
        headers: req.headers != null ? req.headers : "no header",
        body: req.body != null ? req.body : "no body",
        query: req.query != null ? req.query : "no query",
        KEY: process.env.UNIQUE_KEY
    }

    return obj;
}

adminRouter.get('/get',function(req,res){
 
    res = res.status(200);
    res.type('text/plain');
    
   var obj = getReturnData(req);
   res.send(obj);

});

adminRouter.post('/post',function(req,res){
     
    res = res.status(200);
    res.type('text/plain');
    
   var obj = getReturnData(req);
   res.send(obj);

});

adminRouter.put('/put',function(req,res){
    
    res = res.status(200);
    res.type('text/plain');
    
   var obj = getReturnData(req);
   res.send(obj);

});

adminRouter.delete('/delete',function(req,res){
    
    res = res.status(200);
    res.type('text/plain');
    
   var obj = getReturnData(req);
   res.send(obj);

});

adminRouter.use('*', function (req, res, next) {
    res.status(404).send({message: "Invalid method or path."});
    next();
});

app.listen(port);
app.use('/api',adminRouter);
console.log('server created on port 8080');