/**
 * Created by john on 12/17/2015.
 */
var dbManager = require("../DB/DBManager.js");
var user_properties = {

    getAll: function(req, res) {
        dbManager("SELECT * FROM mym8.user_property",res,true); // Spoof a DB call
        res;
    },

    getOne: function(req, res) {
        var user_id = req.params.user_id;
        var property_id = req.params.property_id;
        dbManager("SELECT * FROM mym8.user_property where user_id="+user_id+" and property_id="+property_id,res,true);
        res;
    },

    getUserProperties: function(req, res)
    {
        var id = req.params.id;
        dbManager("SELECT * FROM mym8.user_property where user_id="+id,res,true);
        res;
    }
    ,
    getPropertyUsers: function(req, res)
    {
        var id = req.params.id;
        dbManager("SELECT * FROM mym8.user_property where property_id="+id,res,true);
        res;
    }
    ,

    create: function(req, res) {
        var up = req.body;
        var sql="insert into mym8.user_property (user_id,property_id) values('"+up.user_id+"','"+up.property_id+")";
        dbManager(sql,res,true);
        res;
    },

    update: function(req, res) {
        var up = req.body;
        var user_id = req.params.user_id;
        var property_id = req.params.property_id;
        var sql="update mym8.user_property set user_id='"+up.user_id+"',property_id='"+up.property_id+"' where user_id ="+user_id+" and property_id="+property_id;
        dbManager(sql,res,true);
        res;
    },

    delete: function(req, res) {
        var user_id = req.params.user_id;
        var property_id = req.params.property_id;
        var sql="delete from mym8.user_property  where user_id ="+user_id+"and property_id="+property_id;
        dbManager(sql,res,true);
        res;
    }
    ,
    deleteByProperty: function(req, res) {
        var property_id = req.params.property_id;
        var sql="delete from mym8.user_property  where property_id="+property_id;
        dbManager(sql,res,true);
        res;
    },
    deleteByUser: function(req, res) {
        var user_id = req.params.user_id;
        var sql="delete from mym8.user_property  where user_id ="+user_id;
        dbManager(sql,res,true);
        res;
    }

};

module.exports = user_properties;