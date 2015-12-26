var jwt = require('jwt-simple');
var user = require('./user.js');
var auth = {

    login: function(req, res) {

        var username = req.body.email || '';
        var password = req.body.password || '';

        if (username == '' || password == '') {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid credentials"
            });
            return;
        }

        // Fire a query to your DB and check if the credentials are valid

        var val=auth.validate(username, password, function (dbUserObj) {
            if (!dbUserObj || dbUserObj.length===0) { // If authentication fails, we send a 401 back
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid credentials"
                });
                return;
            }

            if (dbUserObj) {
                // If authentication is success, we will generate a token
                // and dispatch it to the client

                res.json(genToken(dbUserObj[0]));
            }
        });



    },

    validate: function(username, password,callback) {
        // spoofing the DB response for simplicity
        user.login(username,password,callback)

    },

    validateUser: function(id,callback) {
        var res="";
        // spoofing the DB response for simplicity
        user.validateUserId(id,res,callback)
    },
}

// private method
function genToken(user) {
    var expires = expiresIn(7); // 7 days
    var token = jwt.encode({
        exp: expires,
        user_id: user.user_id
    }, require('../config/secret')());
    var tempUser={};
    tempUser.email=user.user_name;
    tempUser.user_id=user.user_id;
    return {
        token: token,
        user:tempUser
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;

/**
 * Created by john on 12/17/2015.
 */
