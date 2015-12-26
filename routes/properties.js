var dbManager = require("../DB/DBManager.js");
var properties = {

    getAll: function(req, res) {
        dbManager("SELECT property_id,property_name,property_address FROM property",res,true); // Spoof a DB call
        res;
    },

    getOne: function(req, res) {
        var id = req.params.id;
        dbManager("SELECT property_id,property_name,property_address FROM property where property.property_id="+id,res,true);
        res;
    },

    create: function(req, res) {
        var newProperty = req.body;
        var sql="insert into property (property_address,property_name,monthly_rent) values('"+newProperty.propertyaddress+"','"+newProperty.property_name+"',"+newProperty.monthly_rent+")";
        dbManager(sql,res,true);
        res;
    },

    update: function(req, res) {
        var updateProperty = req.body;
        var id = req.params.id;
        var sql="update property set property_address='"+updateProperty.property_address+"',property_name='"+updateProperty.property_name+"',monthly_rent="+updateProperty.monthly_rent+"  where property_id ="+id;
        dbManager(sql,res,true);
        res;
    },

    delete: function(req, res) {
        var id = req.params.id;
        var sql="delete from property  where property_id ="+id;
        dbManager(sql,res,true);
        res;
    }
};

module.exports = properties;