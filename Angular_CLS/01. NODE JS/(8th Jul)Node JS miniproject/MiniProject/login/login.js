/*
    compare the client details with database details
    generates the token based on success authentication
*/
//import express module
//require() is the function used to import the modules
let express = require("express");
//import jwt-simple module
//jwt-simple module used to generate the tokens
let jwt = require("jwt-simple");
//import mysql module
let mysql = require("mysql");
//create the connection object
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "miniproject"
});
//connect to database
connection.connect();
//create and export module
module.exports = express.Router().post("/",(req,res)=>{
    //compare
    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,
                (err,records,fields)=>{
        if(records.length>0){
            //generate the token
            let token = jwt.encode({
                'uname':req.body.uname,
                'upwd':req.body.upwd
            },'hr@tcs.in');
            require("../config/token").token = token;
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'fail'});
        }
    });    
});







