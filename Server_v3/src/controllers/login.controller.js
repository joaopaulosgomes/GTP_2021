const bcrypt = require('bcryptjs');
const dbConn = require("../config/db.config");

// Home Page
exports.homePage = async (req, res, next) => {
    const [row] = await dbConn.execute("SELECT * FROM `users` WHERE `id`=?", [req.session.userID]);

    if (row.length !== 1) {
        return res.redirect('/logout');
    }

    res.render('home', {
        user: row[0]
    });
}



// User Registration
exports.register = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    try {

        const [row] = dbConn.query(
            "INSERT INTO users (username) VALUES (?)",
            [username, hash],
            (err, result) => {
            console.log(err);
            }
        );
       
        if (row.length >= 1) {
            res.send(401).send({success: false, message: 'This username already in use.'});
        }

        



        const [row] = await dbConn.execute(
            "SELECT * FROM `users` WHERE `username`=?",
            [body.username]
        );

        



        const [rows] = await dbConn.execute(
            "INSERT INTO `users`(`username`,`password`) VALUES(?,?)",
            [body.username, hashPass]
        );

        if (rows.affectedRows !== 1) {
            res.send(401).send({success: false, message: 'Your registration has failed.'});
        }
       
        res.json({status: true, message: 'You have successfully registered!'})

        

    } catch (e) {
        next(e);
    }
};


// Login User
exports.login = async (req, res, next) => {

    const errors = validationResult(req);
    const { body } = req;

    // if (!errors.isEmpty()) {
    //     return res.render('login', {
    //         error: errors.array()[0].message
    //     });
    // }

    try {

        const [row] = await dbConn.execute('SELECT * FROM `users` WHERE `username`=?', [body.username]);

        if (row.length != 1) {
            res.send(401).send({success: false, message: 'Invalid username address.'});
        }

        const checkPass = await bcrypt.compare(body.password, row[0].password);

        if (checkPass === true) {
            req.session.userID = row[0].id;
            //return res.redirect('/');
        }

        res.render('login', {
            error: 'Invalid Password.'
        });

        res.status(401).json({ error: 'Invalid Password' })

    }
    catch (e) {
        next(e);
    }

}
