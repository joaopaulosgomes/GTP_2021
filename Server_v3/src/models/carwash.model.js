var dbConn  = require('../../config/db.config');

var Carwash = function(carwash){
    const date1       =   carwash.date;
    const date2       =   date1.split("T");
    this.date         =   date2[0];
    this.type         =   carwash.type;
    this.price        =   carwash.price;
    this.user_id      =   carwash.user_id;
    this.vehicle_id   =   carwash.vehicle_id;
}

// get all carwash
Carwash.getAllCarwash = (result) =>{
    dbConn.query('SELECT * FROM carwash', (err, res)=>{
        if(err){
            console.log('Error while fetching carwash', err);
            result(null,err);
        }else{
            console.log('carwash fetched successfully');
            result(null,res);
        }
    })
}

// get carwash by Name for Search Data by User_ID
Carwash.getCarwashByUser = (user_id, result)=>{
    dbConn.query('SELECT * FROM carwash WHERE user_id=?', user_id, (err, res)=>{
        if(err){
            console.log('Error while fetching carwash by user id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new carwash
Carwash.createCarwash = (carwashReqData, result) =>{
    dbConn.query('INSERT INTO carwash SET ?', carwashReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('carwash created successfully');
            result(null, res)
        }
    })
}


// get carwash by ID for update
Carwash.getCarwashByID = (id, result)=>{
    dbConn.query('SELECT * FROM carwash WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching carwash by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}


// update carwash
Carwash.updateCarwash = (id, carwashReqData, result)=>{
    dbConn.query("UPDATE carwash SET date=?, type=?, price=?, user_id=?, vehicle_id=? WHERE id = ?",
    [carwashReqData.date, carwashReqData.type, carwashReqData.price, carwashReqData.user_id, carwashReqData.vehicle_id, id], (err, res)=>{
        if(err){
            console.log('Error while updating the carwash');
            result(null, err);
        }else{
            console.log("carwash updated successfully");
            result(null, res);
        }
    });
}

// delete carwash
Carwash.deleteCarwash = (id, result)=>{
    dbConn.query('DELETE FROM carwash WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the carwash');
            result(null, err);
        }else{
            result(null, res);
        }
    })

}

module.exports = Carwash;