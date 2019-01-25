var express = require('express')
var app = express()
var PORT = 8081
var user  = {
    name : ""
}

app.get('/set/:name',(req,res)=>{
    user.name = req.params.name
    console.log("request : name "+user.name+" req "+req.params.name ,req.method,req.url)
    res.end(JSON.stringify(user))
})
app.get('/',(req,res)=>{
    res.send(JSON.stringify(user))
})

app.listen(PORT,()=>{
    console.log("sever running : " + PORT)
})