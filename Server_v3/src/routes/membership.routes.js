const express = require('express');
const router = express.Router();

const membershipController = require('../controllers/membership.controller');

// get all memberships
router.get('/', membershipController.getMembershipList);

// get membership by ID
router.get('/:id',membershipController.getMembershipByID);

// get ID for Update 
router.get('/searchRecord/:user_id',membershipController.getMembershipByUser);

// create new membership
router.post('/', membershipController.createNewMembership);

// update membership
router.put('/:id', membershipController.updateMembership);

// delete membership
router.delete('/:id',membershipController.deleteMembership);

module.exports = router;