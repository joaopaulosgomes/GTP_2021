const express = require('express');
const router = express.Router();

const reservationController = require('../controllers/reservation.controller');

// get all reservations
router.get('/', reservationController.getReservationList);

// get reservation by ID
router.get('/:id',reservationController.getReservationByID);

// get ID for Update 
router.get('/searchRecord/:user_id',reservationController.getReservationByUser);

// create new reservation
router.post('/', reservationController.createNewReservation);

// update reservation
router.put('/:id', reservationController.updateReservation);

// delete reservation
router.delete('/:id',reservationController.deleteReservation);

module.exports = router;