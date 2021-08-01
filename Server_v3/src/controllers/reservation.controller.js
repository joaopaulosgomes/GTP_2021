
const reservationModel = require('../models/reservation.model');

// get all reservation list
exports.getReservationList = (req, res)=> {
    //console.log('here all reservation list');
    reservationModel.getAllReservation((err, reservation) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('reservation', reservation);
        res.send(reservation)
    })
}

// get reservation by User_id
exports.getReservationByUser = (req, res)=>{
    //console.log('get reservation by id');
    reservationModel.getReservationByUser(req.params.user_id, (err, reservation)=>{
        if(err)
        res.send(err);
        console.log('single reservation data',reservation);
        res.send(reservation);
    })
}


// create new reservation
exports.createNewReservation = (req, res) =>{
    const reservationReqData = new reservationModel(req.body);
    console.log('reservationReqData', reservationReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        reservationModel.createReservation(reservationReqData, (err, reservation)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Reservation Created Successfully', data: reservation.insertId})
            //there is a bug to be fixed here
        })
    }
}


// get reservation by ID  for Update 
exports.getReservationByID = (req, res)=>{
    //console.log('get reservation by id');
    reservationModel.getreservationByID(req.params.id, (err, reservation)=>{
        if(err)
        res.send(err);
        console.log('single reservation data',reservation);
        
        res.send(JSON.stringify({ status: 200, error: null, response: reservation }));
    })
}


// update reservation
exports.updateReservation = (req, res)=>{
    const reservationReqData = new reservationModel(req.body);
    console.log('reservationReqData update', reservationReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        reservationModel.updateReservation(req.params.id, reservationReqData, (err, reservation)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'reservation updated successfully'})
        })
    }
}

// delete reservation
exports.deleteReservation = (req, res)=>{
    reservationModel.deleteReservation(req.params.id, (err, reservation)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'Reservation deleted successully!'});
    })
}