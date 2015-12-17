/**
 * Created by john on 12/17/2015.
 */
/**
 * Created by john on 12/17/2015.
 */
var dbManager = require("../DB/DBManager.js");
var mates = {

    getAll: function (req, res) {
        dbManager("SELECT * FROM mym8.mates", res, true); // Spoof a DB call
        res;
    },

    getOne: function (req, res) {
        var m81 = req.params.m81;
        var m82 = req.params.m82;
        var property_id = req.params.property_id;
        dbManager("SELECT * FROM mym8.mates where ((user_id=" + m82 + " and user_id2=" + m81 + ") or (user_id=" + m81 + " and user_id2=" + m82 + ")) and property_id=" + property_id, res, true);
        res;
    },
    getUserMates: function (req, res) {
        var user_id = req.params.user_id;
        dbManager("SELECT * FROM mym8.mates where user_id=" + user_id + " or user_id2=" + user_id, res, true);
        res;
    },
    getMateProperty: function (req, res) {
        var m81 = req.params.m81;
        var m82 = req.params.m82;
        dbManager("SELECT * FROM mym8.mates where (user_id=" + m82 + " and user_id2=" + m81+") or (user_id=" + m81 + " and user_id2=" + m82+")", res, true);
        res;
    }
    ,
    getPropertyMates: function (req, res) {
        var property_id = req.params.property_id;
        dbManager("SELECT * FROM mym8.mates where property_id=" + property_id, res, true);
        res;
    }
    ,
    create: function (req, res) {
        var m8s = req.body;
        var m81 = m8s.user_id;
        var m82 = m8s.user_id2;
        var property_id = m8s.property_id;
        var sql = "insert into mym8.mates values("+m81 + ","+m82+","+property_id+")";
        dbManager(sql, res, true);
        res;
    },

    update: function (req, res) {
        var m81 = req.params.m81;
        var m82 = req.params.m82;
        var property_id = req.params.property_id;
        var m8 = req.body;
        var sql = "update mym8.mates set user_id='" + m8.user_id + "',user_id2='" + m8.user_id2+ ", property_id="+m8.property_id;
        sql+="where ((user_id=" + m82 + " and user_id2=" + m81 + ") or (user_id=" + m81 + " and user_id2=" + m82 + ")) and property_id=" + property_id;
        dbManager(sql, res, true);
        res;
    },

    delete: function (req, res) {
        var m81 = req.params.m81;
        var m82 = req.params.m82;
        var property_id = req.params.property_id;
        var sql = "delete from mym8.mates";
        sql+="where ((user_id=" + m82 + " and user_id2=" + m81 + ") or (user_id=" + m81 + " and user_id2=" + m82 + ")) and property_id=" + property_id;
        dbManager(sql, res, true);
        res;
    }


};

module.exports = mates;