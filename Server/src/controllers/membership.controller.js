
const membershipModel = require('../models/membership.model');

// get all membership list
exports.getMembershipList = (req, res)=> {
    //console.log('here all membership list');
    membershipModel.getAllMembership((err, membership) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('membership', membership);
        res.send(membership)
    })
}

// get membership by User_id
exports.getMembershipByUser = (req, res)=>{
    //console.log('get membership by id');
    membershipModel.getMembershipByUser(req.params.user_id, (err, membership)=>{
        if(err)
        res.send(err);
        console.log('single membership data',membership);
        res.send(membership);
    })
}


// create new membership
exports.createNewMembership = (req, res) =>{
    const membershipReqData = new membershipModel(req.body);
    console.log('membershipReqData', membershipReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        membershipModel.createMembership(membershipReqData, (err, membership)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'membership Created Successfully', data: membership.insertId})
            //there is a bug to be fixed here
        })
    }
}


// get membership by ID  for Update 
exports.getMembershipByID = (req, res)=>{
    //console.log('get membership by id');
    membershipModel.getMembershipByID(req.params.id, (err, membership)=>{
        if(err)
        res.send(err);
        console.log('single membership data',membership);
        
        res.send(JSON.stringify({ status: 200, error: null, response: membership }));
    })
}


// update membership
exports.updateMembership = (req, res)=>{
    const membershipReqData = new membershipModel(req.body);
    console.log('membershipReqData update', membershipReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        membershipModel.updateMembership(req.params.id, membershipReqData, (err, membership)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'membership updated successfully'})
        })
    }
}

// delete membership
exports.deleteMembership = (req, res)=>{
    membershipModel.deletemembership(req.params.id, (err, membership)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'membership deleted successully!'});
    })
}