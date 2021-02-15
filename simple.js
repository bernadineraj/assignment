// const express = require('express');
// const app = express();

// app.get('',(req,res) =>{
//     res.send('Hello express!');
// })

// app.listen(5000,() =>{
//     console.log('Server is up on port 5000.');
// }) 






const express = require('express');
const app = express();
app.use(express.static('public'));
// const fs = require("fs");

const data = require('C:/Users/berna/OneDrive/Desktop/test/users.json');

app.get('',(req,res) =>{
    res.send('Hello express!');
})

app.get('/users',(req,res) =>{
    
    const users = require("./users"); 
    console.log(users); 
 })


//     app.post('/create',(req,res) =>{
//     let user ={
//         name: "New User",
//         age: 20,
//         gender: "unknown",
//         location: "bangalore"
//     };
//     users.push(user);
//     fs.writeFile("/temp/users.json", JSON.stringify(users), err => {
//          if (err) throw err;
//         console.log("done");
//     })
// })


app.listen(5000,() =>{
    console.log('Server is up on port 5000.');
})