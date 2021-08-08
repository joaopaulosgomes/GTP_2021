var dbConn  = require('../../config/db.config');

var Vehicle = function(vehicle){
    this.make           =   vehicle.make;
    this.model          =   vehicle.model;
    this.type           =   vehicle.type;
    this.number_plate   =   vehicle.number_plate;
    this.colour         =   vehicle.colour;
    this.user_id        =   vehicle.user_id;

}

// get all vehicle
Vehicle.getAllVehicle = (result) =>{
    dbConn.query('SELECT * FROM vehicle', (err, res)=>{
        if(err){
            console.log('Error while fetching vehicle', err);
            result(null,err);
        }else{
            console.log('Vehicle fetched successfully');
            result(null,res);
        }
    })
}

// get vehicle by Name for Search Data by Number Plate
Vehicle.getVehicleByName = (number_plate, result)=>{///////tem que ser corrigido
    dbConn.query('SELECT * FROM vehicle WHERE number_plate=?', number_plate, (err, res)=>{
        if(err){
            console.log('Error while fetching vehicle by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new vehicle
Vehicle.createVehicle = (vehicleReqData, result) =>{
    dbConn.query('INSERT INTO vehicle SET ?', vehicleReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('vehicle created successfully');
            result(null, res)
        }
    })
}


// get vehicle by ID for update
Vehicle.getVehicleByID = (id, result)=>{
    dbConn.query('SELECT * FROM vehicle WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching vehicle by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}


// update vehicle
Vehicle.updateVehicle = (id, vehicleReqData, result)=>{
    dbConn.query("UPDATE vehicle SET make=?, model=?, type=?, number_plate=?, colour=?, user_id=? WHERE id = ?",
    [vehicleReqData.make, vehicleReqData.model, vehicleReqData.type, vehicleReqData.number_plate, vehicleReqData.colour, vehicleReqData.user_id, id], (err, res)=>{
        
        if(err){
            console.log('Error while updating the vehicle');
            result(null, err);
        }else{
            console.log("Vehicle updated successfully");
            result(null, res);
        }
    });
}

// delete vehicle
Vehicle.deleteVehicle = (id, result)=>{
    dbConn.query('DELETE FROM vehicle WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the vehicle');
            result(null, err);
        }else{
            result(null, res);
        }
    })

}

module.exports = Vehicle;