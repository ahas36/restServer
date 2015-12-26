/**
 * Created by john on 12/17/2015.
 */
var mysql     =    require('mysql');
//SET UP MySql
var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',//'sql6.freemysqlhosting.net',
    user     : 'root',//'sql6100189',
    password : 'admin',//'JqLiS3KDNi',
    database : 'mym8',//'sql6100189',
    debug    :  false
});

function handle_database(req,res,type,callback) {

    pool.getConnection(function(err,connection){
        if (err) {
            connection.release();
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        }

        console.log('connected as id ' + connection.threadId);

        connection.query(req,function(err,rows){
            connection.release();
            if(!err&&type) {

                if(callback)
                {
                    res=rows;
                    callback(res);
                }
                else
                {
                    res.json(rows);
                }
            }
            else
            {
                res.json("asda");
                return;
            }
        });

        connection.on('error', function(err) {
            console.writeln(err);
            res.json({"code" : 100, "status" : "Error in connection database"});
            return;
        });
    });
}

module.exports = handle_database;