const express = require('express');
const router = express.Router();

const vehicleController = require('../controllers/vehicle.controller');

// get all vehicles
router.get('/', vehicleController.getVehicleList);

// get vehicle by ID
router.get('/:id',vehicleController.getVehicleByID);

// get ID for Update 
router.get('/searchRecord/:number_plate',vehicleController.getVehicleByName);

// create new vehicle
router.post('/', vehicleController.createNewVehicle);

// update vehicle
router.put('/:id', vehicleController.updateVehicle);

// delete vehicle
router.delete('/:id',vehicleController.deleteVehicle);

module.exports = router;