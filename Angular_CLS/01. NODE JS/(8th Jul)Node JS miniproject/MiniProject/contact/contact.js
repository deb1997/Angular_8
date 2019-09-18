/*
    this file used to fetch the data from SQLServer
*/
//import express module
let express = require("express");
//import mssql module
let mssql = require("mssql");
//create and return the module
module.exports = express.Router().get("/",
                            [require("../config/auth")],
                                (req,res)=>{
    //connect to SQLServer
    mssql.connect({server:"localhost",
                   user:"sa",
                   password:"123",
                   database:"miniproject"},(err)=>{
        if(err)
            throw err;
        else{
            //create the request object
            //by using request object only we can query the tables
            let request = new mssql.Request();
            //query the table
            request.query(`select * from contact`,
                                (err,records)=>{
                if(err)
                    throw err;
                else
                    res.send(records);
                mssql.close();
            });
        }
    });
});