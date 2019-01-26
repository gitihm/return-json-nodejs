var express = require('express')
var body = require('body-parser')
var http = require('http')
var app = express()
var PORT = 8081
var user  = {
    name : ""
}
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain,body.json())
app.get('/set/:name',(req,res)=>{
    user.name = req.params.name
    console.log("request : name "+user.name+" req "+req.params.name ,req.method,req.url)
    res.end(JSON.stringify(user))
})
app.post('/',(req,res)=>{
    console.log("request  ",req.body.id ,req.method,req.url)
    console.log( user.name +"= "+req.body.name)
    user.name = req.body.name
    res.end(JSON.stringify(user))
    
})
app.get('/',(req,res)=>{
    console.log("request  ",req.params.name ,req.method,req.url)
    res.send(JSON.stringify(user))
})

app.listen(PORT,()=>{
    console.log("sever running : " + PORT)
})