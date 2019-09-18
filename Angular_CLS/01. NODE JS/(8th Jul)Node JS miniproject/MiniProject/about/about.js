//import express module
let express = require("express");
//import mysql module
let mysql = require("mysql");
//create the connection object
let connection = mysql.createConnection({
    host    :   "localhost",
    user    :   "root",
    password : "root",
    database  : "miniproject"
});
//connect to database
connection.connect();
//create and export module
module.exports = express.Router().get("/",
                            [require("../config/auth")],
                                (req,res)=>{
    connection.query(`select * from about`,
                                    (err,records,fields)=>{
        if(err)
            throw err;
        else
            res.send(records);
    });
});








