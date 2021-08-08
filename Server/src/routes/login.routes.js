const { body } = require("express-validator");

const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.controller');


// const ifNotLoggedin = (req, res, next) => {
//     if(!req.session.userID){
//         return res.redirect('/login');
//     }
//     next();
// }

// const ifLoggedin = (req,res,next) => {
//     if(req.session.userID){
//         return res.redirect('/');
//     }
//     next();
// }


// login
router.get('/', loginController.login);

// register
router.get('/register',loginController.register);

// logout
router.get('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        next(err);
    });
    //res.redirect('/login');
});

module.exports = router;












router.get('/', ifNotLoggedin, homePage);

router.get("/login", ifLoggedin, loginPage);

router.post("/login",
ifLoggedin,
    [
        body("_email", "Invalid email address")
            .notEmpty()
            .escape()
            .trim()
            .isEmail(),
        body("_password", "The Password must be of minimum 4 characters length")
            .notEmpty()
            .trim()
            .isLength({ min: 4 }),
    ],
    login
);

router.get("/signup", ifLoggedin, registerPage);

router.post(
    "/signup",
    ifLoggedin,
    [
        body("_name", "The name must be of minimum 3 characters length")
            .notEmpty()
            .escape()
            .trim()
            .isLength({ min: 3 }),
        body("_email", "Invalid email address")
            .notEmpty()
            .escape()
            .trim()
            .isEmail(),
        body("_password", "The Password must be of minimum 4 characters length")
            .notEmpty()
            .trim()
            .isLength({ min: 4 }),
    ],
    register
);



module.exports = router;