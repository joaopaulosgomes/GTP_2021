const express  = require("express");
const cors = require ("cors");
const app = express();
const mysql = require ('mysql');


const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',//password or root
  database: 'CarparkDB',
  port: '8889'//3306
    
});

app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());


app.post("/users/insert", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?);"

    db.query(sqlInsert,[username,password], (err, result) => {
        console.log(err);
    })
})

app.get("/users/get", (req,res) => {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get("/users/check-user", (req,res) => {
    const username = req.body.username;
    const sqlSelect = "SELECT username FROM users WHERE username='"+username+"';"
    db.query(sqlSelect, (err, result) => {
        // if(result.lenght === 0){
        //     res.send(result);
        // }else{
        //     res.send(result.lenght);
        // }
        //res.send(result);
        console.log(result)
    })
})


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