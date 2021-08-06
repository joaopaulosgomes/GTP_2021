
const carwashModel = require('../models/carwash.model');

// get all carwash list
exports.getCarwashList = (req, res)=> {
    //console.log('here all carwash list');
    carwashModel.getAllCarwash((err, carwash) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('carwash', carwash);
        res.send(carwash)
    })
}

// get carwash by User_id
exports.getCarwashByUser = (req, res)=>{
    //console.log('get carwash by id');
    carwashModel.getCarwashByUser(req.params.user_id, (err, carwash)=>{
        if(err)
        res.send(err);
        console.log('single carwash data',carwash);
        res.send(carwash);
    })
}


// create new carwash
exports.createNewCarwash = (req, res) =>{
    const carwashReqData = new carwashModel(req.body);
    console.log('carwashReqData', carwashReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        carwashModel.createCarwash(carwashReqData, (err, carwash)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'carwash Created Successfully', data: carwash.insertId})
            //there is a bug to be fixed here
        })
    }
}


// get carwash by ID  for Update 
exports.getCarwashByID = (req, res)=>{
    //console.log('get carwash by id');
    carwashModel.getCarwashByID(req.params.id, (err, carwash)=>{
        if(err)
        res.send(err);
        console.log('single carwash data',carwash);
        
        res.send(JSON.stringify({ status: 200, error: null, response: carwash }));
    })
}


// update carwash
exports.updateCarwash = (req, res)=>{
    const carwashReqData = new carwashModel(req.body);
    console.log('carwashReqData update', carwashReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        carwashModel.updatecarwash(req.params.id, carwashReqData, (err, carwash)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'carwash updated successfully'})
        })
    }
}

// delete carwash
exports.deleteCarwash = (req, res)=>{
    carwashModel.deleteCarwash(req.params.id, (err, carwash)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'carwash deleted successully!'});
    })
}