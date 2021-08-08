
const vehicleModel = require('../models/vehicle.model');

// get all vehicle list
exports.getVehicleList = (req, res)=> {
    //console.log('here all vehicle list');
    vehicleModel.getAllVehicle((err, vehicle) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Vehicle', vehicle);
        res.send(vehicle)
    })
}

// get vehicle by Name for earch by Name 
exports.getVehicleByName = (req, res)=>{
    //console.log('get vehicle by id');
    vehicleModel.getVehicleByName(req.params.first_name, (err, vehicle)=>{
        if(err)
        res.send(err);
        console.log('single vehicle data',vehicle);
        res.send(vehicle);
    })
}


// create new vehicle
exports.createNewVehicle = (req, res) =>{
    const vehicleReqData = new vehicleModel(req.body);
    console.log('vehicleReqData', vehicleReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        vehicleModel.createVehicle(vehicleReqData, (err, vehicle)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Vehicle Created Successfully', id: vehicle.insertId})
            //there is a bug to be fixed here
        })
    }
}


// get vehicle by ID  for Update 
exports.getVehicleByID = (req, res)=>{
    //console.log('get vehicle by id');
    vehicleModel.getVehicleByID(req.params.id, (err, vehicle)=>{
        if(err)
        res.send(err);
        console.log('single vehicle data',vehicle);
        
        res.send(JSON.stringify({ status: 200, error: null, response: vehicle }));
    })
}


// update vehicle
exports.updateVehicle = (req, res)=>{
    const vehicleReqData = new vehicleModel(req.body);
    console.log('vehicleReqData update', vehicleReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        vehicleModel.updateVehicle(req.params.id, vehicleReqData, (err, vehicle)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Vehicle updated successfully'})
        })
    }
}

// delete vehicle
exports.deleteVehicle = (req, res)=>{
    vehicleModel.deleteVehicle(req.params.id, (err, vehicle)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Vehicle deleted successully!'});
    })
}