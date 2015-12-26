/**
 * Created by john on 12/17/2015.
 */
var dbManager = require("../DB/DBManager.js");
var users = {

    getAll: function(req, res) {
        dbManager("SELECT * FROM user",res,true); // Spoof a DB call
        res;
    },

    getOne: function(req, res) {
        var id = req.params.id;
        dbManager("SELECT * FROM user where user_id="+id,res,true);
        res;
    },
    login: function(user,pass, callback) {
        var res="";
        dbManager("SELECT * FROM user where user_name='"+user+"' and password='"+pass+"'",res,true,callback);

    },
    validateUserId: function(req, res,callback)
    {

        var id = req;
        dbManager("SELECT * FROM user where user_id="+id,res,true,callback);
        res;
    }
    ,
    getByUserName: function(req, res)
    {
        var username = req.params.username;
        dbManager("SELECT * FROM user where user_name='"+username+"'",res,true);
        res;
    }
    ,

    create: function(req, res) {
        var newUser = req.body;
        var sql="insert into user (user_name,password) values('"+newUser.email+"','"+newUser.password+"')";
        dbManager(sql,res,true);
        res;
    },

    update: function(req, res) {
        var updateUser = req.body;
        var id = req.params.id;
        var sql="update user set user_name='"+updateUser.user_name+"',password='"+updateUser.password+"' where user_id ="+id;
        dbManager(sql,res,true);
        res;
    },

    delete: function(req, res) {
        var id = req.params.id;
        var sql="delete from user  where user_id ="+id;
        dbManager(sql,res,true);
        res;
    }
};

module.exports = users;