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
      "INSERT INTO users (username, password) VALUES (?, MD5(?))",
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



  app.post("/login", async (req, res) => {///////////meu ultimo teste de ontem
    const { username } = req.body.username;
  
    const user = await users.findOne({ where: { username: username } });
  
    if (!user) res.status(400).json({ error: "User Doesn't Exist" });
  
    res.json("LOGGED IN");

    // const dbPassword = user.password;
    // bcrypt.compare(password, dbPassword).then((match) => {
    //   if (!match) {
    //     res
    //       .status(400)
    //       .json({ error: "Wrong Username and Password Combination!" });
    //   } else {
    //     const accessToken = createTokens(user);
  
    //     res.cookie("access-token", accessToken, {
    //       maxAge: 60 * 60 * 24 * 30 * 1000,
    //       httpOnly: true,
    //     });
  
    //     //**res.json("LOGGED IN");
    //   }
    // });
  });




app.listen(3001,() => {
    console.log("running on port 3001");
});