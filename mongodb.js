const express = require('express')
const bodyParser = require('body-parser')

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
// let data = require('./nan.json');


const app = express()
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

const url  ="mongodb://127.0.0.1:27017/";
const databaseName = 'nandish';

// MongoClient.connect(connectionURL, { useNewUrlParser:true}, (error, client) => {
//     if (error){
//         return console.log('unable to connect to database!')
//     }
//    const db = client.db(databaseName)
// //     // db.collection('users').insertOne({
// //     //     name: 'Berna',
// //     //     age: 23
// //     // })
//  })

app.get('/user', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("databaseName");
        dbo.collection("users").find({}). toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
});


app.post('/create', (req,res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo =db.db("databaseName");
        dbo.collection("users").insertOne({
            name: req.body.name,
            age:req.body.age
        },
        function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close(); 
        })
    })
})


    
app.listen(5000,() =>{
    console.log('Server is up on port 5000.');
 })