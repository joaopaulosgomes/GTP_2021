var dbConn  = require('../../config/db.config');

var Reservation = function(reservation){
    const date1       =   reservation.from_date;
    const date2       =   date1.split("T"); 
    this.from_date    =   date2[0];
    this.numb_days    =   reservation.numb_days;
    this.type         =   reservation.type;
    this.price        =   reservation.price;
    this.status        =  "BOOKED";
    this.user_id      =   reservation.user_id;
    this.vehicle_id  =   reservation.vehicle_id;

}

// get all reservation
Reservation.getAllReservation = (result) =>{
    dbConn.query('SELECT * FROM reservation', (err, res)=>{
        if(err){
            console.log('Error while fetching reservation', err);
            result(null,err);
        }else{
            console.log('reservation fetched successfully');
            result(null,res);
        }
    })
}

// get reservation by Name for Search Data by User_ID
Reservation.getReservationByUser = (user_id, result)=>{
    dbConn.query('SELECT * FROM reservation WHERE user_id=?', user_id, (err, res)=>{
        if(err){
            console.log('Error while fetching reservation by user id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new reservation
Reservation.createReservation = (reservationReqData, result) =>{
    dbConn.query('INSERT INTO reservation SET ?', reservationReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Reservation created successfully');
            result(null, res)
        }
    })
}


// get reservation by ID for update
Reservation.getReservationByID = (id, result)=>{
    dbConn.query('SELECT * FROM reservation WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching reservation by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}


// update reservation
Reservation.updateReservation = (id, reservationReqData, result)=>{
    dbConn.query("UPDATE reservation SET from_date=?, numb_days=?, type=?, price=?, status=?, user_id=?, vehicle_id=? WHERE id = ?",
    [reservationReqData.from_date, reservationReqData.numb_days, reservationReqData.type, reservationReqData.price, reservationReqData.status,
        reservationReqData.user_id, reservationReqData.vehicle_id, id], (err, res)=>{
        if(err){
            console.log('Error while updating the reservation');
            result(null, err);
        }else{
            console.log("Reservation updated successfully");
            result(null, res);
        }
    });
}

// delete reservation
Reservation.deleteReservation = (id, result)=>{
    dbConn.query('DELETE FROM reservation WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the reservation');
            result(null, err);
        }else{
            result(null, res);
        }
    })

}

module.exports = Reservation;