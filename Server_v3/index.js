const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const dbConn = require("./config/db.config");

const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");

const saltRounds = 10;

//app.use(cors())
// create express app

//save the login data of the session
app.use(session({
    name: 'session',
    secret: 'my_s3cret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        //maxAge: 3600 * 1000, // 1hr
        expires: 60 * 60 * 24,
    }
}));

// setup the server port
const port = process.env.PORT || 7000;

// parse request data content type application/x-www-form-rulencoded
//app.use(express.urlencoded({extended: false}));

// parse request data content type application/json
app.use(express.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Express server is running');
});

// import users routes
const usersRoutes = require('./src/routes/users.routes');
const vehicleRoutes = require('./src/routes/vehicle.routes');
const reservationRoutes = require('./src/routes/reservation.routes');
//const loginRoutes = require('./src/routes/login.routes');

// create all the carpark routes
app.use('/api/carpark/user', usersRoutes);
app.use('/api/carpark/vehicle', vehicleRoutes);
app.use('/api/carpark/reservation', reservationRoutes);
//app.use('/api/carpark/login', loginRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});







//###############################################################


app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.urlencoded({extended: true}));

  app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      }
  
      dbConn.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, hash],
        (err, result) => {
          console.log(err);
        }
      );
    });
  });
  

  app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });
  
  app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    dbConn.query(
      "SELECT * FROM users WHERE username = ?;",
      username,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          });
        } else {
          res.send({ message: "User doesn't exist" });
        }
      }
    );
  });