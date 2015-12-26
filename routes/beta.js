/**
 * Created by john on 12/18/2015.
 */
/**
 * Created by john on 12/17/2015.
 */
var dbManager = require("../DB/DBManager.js");
var beta = {

    getAll: function (req, res) {
        dbManager("SELECT * FROM beta", res, true); // Spoof a DB call
        res;
    },

    getOne: function (req, res) {
        var id = req.params.id;
        dbManager("SELECT * FROM beta where paid_id=" + id, res, true);
        res;
    },
    getMine: function (req, res) {
        var user_id = req.user_id;
        dbManager("SELECT * FROM beta where user_id=" + user_id, res, true);
        res;
    }
    ,
    create: function (req, res) {
        var newBeta = req.body;
        var user_id = req.user_id;
        var sql = "insert into beta (user_id,title,description,amount,not_share) values(" + user_id + ",'" + newBeta.title + "','" + newBeta.description + "'," + newBeta.amount + "," + newBeta.not_share + ")";
        dbManager(sql, res, true);
        res;
    },

    update: function (req, res) {
        var newBeta = req.body;
        var id = req.params.id;
        var sql = "update beta set title='" + newBeta.title + "',description='" + newBeta.description + "',amount=" + newBeta.amount + "',not_share=" + newBeta.not_share + " where paid_id =" + id;
        dbManager(sql, res, true);
        res;
    },

    delete: function (req, res) {
        var id = req.params.id;
        var sql = "delete from beta where paid_id =" + id;
        dbManager(sql, res, true);
        res;
    },
    myTotal: function (req, res) {
        var user_id = req.user_id;
        var sql = "select sum(amount) as myTotal from beta where user_id =" + user_id;
        dbManager(sql, res, true);
        res;
    }
    ,
    total: function (req, res) {
        var sql = "select sum(amount) as total from beta";
        dbManager(sql, res, true);
        res;
    }
    ,
    balance: function (req, res) {
        var user_id = req.user_id;
        var sql = "SELECT balance(" + user_id + ") as balance";
        dbManager(sql, res, true);
        res;
    }
};

module.exports = beta;