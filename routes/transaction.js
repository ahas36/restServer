/**
 * Created by john on 12/18/2015.
 */
/**
 * Created by john on 12/18/2015.
 */
/**
 * Created by john on 12/17/2015.
 */
var dbManager = require("../DB/DBManager.js");
var transaction = {

    getAll: function (req, res) {
        dbManager("SELECT * FROM beta_transaction", res, true); // Spoof a DB call
        res;
    },

    getOne: function (req, res) {
        var id = req.params.id;
        dbManager("SELECT * FROM beta_transaction where transaction_id=" + id, res, true);
        res;
    },
    getMine: function (req, res) {
        var user_id = req.user_id;
        dbManager("SELECT * FROM beta_transaction where to_user="+user_id+" or from_user=" + user_id, res, true);
        res;
    }
    ,
    create: function (req, res) {
        var ta = req.body;
        var user_id = req.user_id;
        var sql = "insert into beta_transaction (from_user,to_user,title,amount) values(" + user_id + "," + ta.to_user + ",'" + ta.title + "'," + ta.amount+")";
        dbManager(sql, res, true);
        res;
    },

    update: function (req, res) {
        var newBeta = req.body;
        var id = req.params.id;
        var sql = "update beta_transaction set title='" + newBeta.title +  "',amount=" + newBeta.amount +" where transaction_id =" + id;
        dbManager(sql, res, true);
        res;
    },

    delete: function (req, res) {
        var id = req.params.id;
        var sql = "delete from beta_transaction where transaction_id =" + id;
        dbManager(sql, res, true);
        res;
    },
    myTotalIn: function (req, res) {
        var user_id = req.user_id;
        var sql = "select sum(amount) as myTotalIn from beta_transaction where to_user =" + user_id;
        dbManager(sql, res, true);
        res;
    }
    ,
    myTotalOut: function (req, res) {
        var user_id = req.user_id;
        var sql = "select sum(amount) as myTotalOut from beta_transaction where from_user =" + user_id;
        dbManager(sql, res, true);
        res;
    }

};

module.exports = transaction;