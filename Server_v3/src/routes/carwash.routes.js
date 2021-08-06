const express = require('express');
const router = express.Router();

const carwashController = require('../controllers/carwash.controller');

// get all carwashs
router.get('/', carwashController.getCarwashList);

// get carwash by ID
router.get('/:id',carwashController.getCarwashByID);

// get ID for Update 
router.get('/searchRecord/:user_id',carwashController.getCarwashByUser);

// create new carwash
router.post('/', carwashController.createNewCarwash);

// update carwash
router.put('/:id', carwashController.updateCarwash);

// delete carwash
router.delete('/:id',carwashController.deleteCarwash);

module.exports = router;