const mysql = require('mysql');

// create here mysql connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'CarparkDB',
    port: '8889'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database connected successfully!!!');
})

module.exports = dbConn;
