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


app.post("/signup/1", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    db.query(
      "INSERT INTO user (username, password) VALUES (?, MD5(?))",
      [username, password],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });



  app.post('/login', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
      db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
        if (results.length > 0) {
          request.session.loggedin = true;
          request.session.username = username;
          //response.redirect('/home');
          response.send('Logged in!');
        } else {
          response.send('Incorrect Username and/or Password!');
        }			
        response.end();
      });
    } else {
      response.send('Please enter Username and Password!');
      response.end();
    }
  });




app.listen(3001,() => {
    console.log("running on port 3001");
});