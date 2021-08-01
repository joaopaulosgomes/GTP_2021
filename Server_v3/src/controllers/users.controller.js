
const UserModel = require('../models/users.model');

// get all users list
exports.getUserList = (req, res)=> {
    //console.log('here all users list');
    UserModel.getAllUsers((err, users) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Users', users);
        res.send(users)
    })
}

// get users by Name for earch by Name 
exports.getUserByName = (req, res)=>{
    //console.log('get users by id');
    UserModel.getUserByName(req.params.first_name, (err, user)=>{
        if(err)
        res.send(err);
        console.log('single users data',user);
        res.send(user);
    })
}


// create new users
exports.createNewUser = (req, res) =>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.createUser(userReqData, (err, users)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User Created Successfully', data: users.insertId})
            //there is a bug to be fixed here
        })
    }
}


// get user by ID  for Update 
exports.getUserByID = (req, res)=>{
    //console.log('get users by id');
    UserModel.getUserByID(req.params.id, (err, users)=>{
        if(err)
        res.send(err);
        console.log('single user data',users);
        
        res.send(JSON.stringify({ status: 200, error: null, response: users }));
    })
}


// update user
exports.updateUser = (req, res)=>{
    const userReqData = new UserModel(req.body);
    console.log('userReqData update', userReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        UserModel.updateUser(req.params.id, userReqData, (err, users)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'User updated Successfully'})
        })
    }
}

// delete user
exports.deleteUser = (req, res)=>{
    UserModel.deleteUser(req.params.id, (err, users)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'User deleted successully!'});
    })
}