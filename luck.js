var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  


app.get('/user/get', function (req, res) {  
   res.sendFile( __dirname + "/" + "test1.html" );  
})  

app.post('/create', urlencodedParser, function (req, res) {  
      response = {  
       name:req.body.name,  
       age:req.body.age,
       gender:req.body.gender,
       location:req.body.location  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(5000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  