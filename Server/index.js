const express  = require("express");
const app = express();
const mysql = require ('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',//password or root
  database: 'CarparkDB',
  port: '8889'//3306
    
});



app.get ("/", (req, res) => {

    const sqlInsert = "INSERT INTO users (username, password) VALUES ('mother', 'fucker')"
    db.query(sqlInsert, (err, result) => {
        res.send("hello Joao");
    })
    
});


// app.post("api/insert", (req, res) => {
//     const sqlInsert = "INSERT INTO test (name, surname) VALUES ('um','um');"
//     db.query(sqlInsert,[name,surname], (err, result) => {

//     })
// })

app.listen(3001,() => {
    console.log("running on port 3001");
});


// //######################################################################################################################################
// const express = require ('express');
// const mysql = require ('mysql');

// const app = express();

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'CarparkDB',
//     port: '8889'
// })

// connection.connect((err) => {
//     if(err) {
//         throw err
//     } else {
//         console.log("connected")
//     }
// })

// // connection.query('CREATE TABLE tableTest(id INT(255) UNSIGNED AUTO_INCREMENT PRIMARY KEY, thing VARCHAR(255) NOT NULL)', (err, rows) => {
// //     if (err){
// //         throw err
// //     } else {
// //         console.log("DATA SENT BOIS")
// //         console.log(rows)
// //     }
// // })

// connection.query("INSERT INTO test (name , surname) VALUES ('3', 'JOAO')", (err, rows) =>{
//     if (err){
//                  throw err
//              } else {
//                  console.log("DATA SENT BOIS")
//                  console.log(rows)
//     }
// })

// const port = process.env.PORT  || 5000;
// app.listen(port);

// console.log("App is listening on port " + port)

// //https://www.youtube.com/watch?v=SyaJSKklH0U&ab_channel=Arslan