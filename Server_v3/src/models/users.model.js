var dbConn  = require('../../config/db.config');

var User = function(users){
    this.username       =   users.username;
    this.email          =   users.email;
    this.password       =   users.password;
    this.first_name     =   users.first_name;
    this.last_name      =   users.last_name;
    this.phone_number   =   users.phone_number;
    this.user_type      =   users.user_type;
}

// get all users
User.getAllUsers = (result) =>{
    dbConn.query('SELECT * FROM users', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(null,err);
        }else{
            console.log('Users fetched successfully');
            result(null,res);
        }
    })
}

// get users by Name for Search Data by name 
User.getUserByName = (first_name, result)=>{
    dbConn.query('SELECT * FROM users WHERE first_name=?', first_name, (err, res)=>{
        if(err){
            console.log('Error while fetching user by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new user
User.createUser = (userReqData, result) =>{
    dbConn.query('INSERT INTO users SET ?', userReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('User created successfully');
            result(null, res)
        }
    })
}


// get user by ID for update
User.getUserByID = (id, result)=>{
    dbConn.query('SELECT * FROM users WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching user by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}

// get user by ID for update
User.getUserByUsername = (username, result)=>{
    dbConn.query('SELECT * FROM users WHERE username=?', username, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching user by username', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}


// update user
User.updateUser = (id, userReqData, result)=>{
    dbConn.query("UPDATE users SET email=?, first_name=?, last_name=?, phone_number=? WHERE id = ?",
    [userReqData.email, userReqData.first_name, userReqData.last_name, userReqData.phone_number, id], (err, res)=>{
        
        if(err){
            console.log('Error while updating the user');
            result(null, err);
        }else{
            console.log("User updated successfully");
            result(null, res);
        }
    });
}

// delete user
User.deleteUser = (id, result)=>{
    dbConn.query('DELETE FROM users WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the user');
            result(null, err);
        }else{
            result(null, res);
        }
    })

}

module.exports = User;