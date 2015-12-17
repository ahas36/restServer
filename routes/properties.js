var dbManager = require("../DB/DBManager.js");
var properties = {

    getAll: function(req, res) {
        dbManager("SELECT * FROM mym8.property",res,true); // Spoof a DB call
        res;
    },

    getOne: function(req, res) {
        var id = req.params.id;
        dbManager("SELECT * FROM mym8.property where mym8.property.property_id="+id,res,true);
        res;
    },

    create: function(req, res) {
        var newProperty = req.body;
        var sql="insert into mym8.property (property_address,property_name,monthly_rent) values('"+newProperty.propertyaddress+"','"+newProperty.property_name+"',"+newProperty.monthly_rent+")";
        dbManager(sql,res,true);
        res;
    },

    update: function(req, res) {
        var updateProperty = req.body;
        var id = req.params.id;
        var sql="update mym8.property set property_address='"+updateProperty.property_address+"',property_name='"+updateProperty.property_name+"',monthly_rent="+updateProperty.monthly_rent+"  where property_id ="+id;
        dbManager(sql,res,true);
        res;
    },

    delete: function(req, res) {
        var id = req.params.id;
        var sql="delete from mym8.property  where property_id ="+id;
        dbManager(sql,res,true);
        res;
    }
};

module.exports = properties;