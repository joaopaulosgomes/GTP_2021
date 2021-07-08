var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',//password or root
  database: 'CarparkDB',
  port: '8889'//3306
})

connection.connect()

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

connection.query("INSERT INTO users (username, password) VALUES ('deuzito', 'neves');", (err, rows) =>{
    if (err){
                 throw err
             } else {
                 console.log("done!!")
                  console.log(rows)
    }
})

connection.end()