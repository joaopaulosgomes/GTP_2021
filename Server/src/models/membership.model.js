var dbConn  = require('../../config/db.config');

var Membership = function(membership){
    const date1       =   membership.from_date;
    const date2       =   date1.split("T");
    this.from_date    =   date2[0];
    this.period       =   membership.period;
    this.price        =   membership.price;
    this.user_id      =   membership.user_id;
}

// get all membership
Membership.getAllMembership = (result) =>{
    dbConn.query('SELECT * FROM membership', (err, res)=>{
        if(err){
            console.log('Error while fetching membership', err);
            result(null,err);
        }else{
            console.log('membership fetched successfully');
            result(null,res);
        }
    })
}

// get membership by Name for Search Data by User_ID
Membership.getMembershipByUser = (user_id, result)=>{
    dbConn.query('SELECT * FROM membership WHERE user_id=?', user_id, (err, res)=>{
        if(err){
            console.log('Error while fetching membership by user id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new membership
Membership.createMembership = (membershipReqData, result) =>{
    dbConn.query('INSERT INTO membership SET ?', membershipReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('membership created successfully');
            result(null, res)
        }
    })
}


// get membership by ID for update
Membership.getMembershipByID = (id, result)=>{
    dbConn.query('SELECT * FROM membership WHERE id=?', id, (err, res)=>{
        if(err)
        {
            console.log('Error while fetching membership by id', err);
            result(null, err);
        }
        else
        {
            result(null, res);
        }
    })
}


// update membership
Membership.updateMembership = (id, membershipReqData, result)=>{
    dbConn.query("UPDATE membership SET from_date=?, period=?, price=?, user_id=? WHERE id = ?",
    [membershipReqData.from_date, membershipReqData.period, membershipReqData.price, membershipReqData.user_id, id], (err, res)=>{
        if(err){
            console.log('Error while updating the membership');
            result(null, err);
        }else{
            console.log("membership updated successfully");
            result(null, res);
        }
    });
}

// delete membership
Membership.deleteMembership = (id, result)=>{
    dbConn.query('DELETE FROM membership WHERE id=?', [id], (err, res)=>{
        if(err){
            console.log('Error while deleting the membership');
            result(null, err);
        }else{
            result(null, res);
        }
    })

}

module.exports = Membership;