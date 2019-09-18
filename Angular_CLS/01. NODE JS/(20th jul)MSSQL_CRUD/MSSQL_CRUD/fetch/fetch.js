//import express module
let express = require("express");
//import mssql module
let mssql = require("mssql");
//create and export the module
module.exports = express.Router().get("/",(req,res)=>{
    //connect to SQLServer
    mssql.connect({
        server:"localhost",
        user:"sa",
        password:"123",
        database:"testdb"
    },(err)=>{
        if(err)
            throw err;
        else{
            //create the query object to query the tables
            let request = new mssql.Request();
            //query the table
            request.query(`select * from products`,
                                (err,records)=>{
                if(err)
                    throw err;
                else
                    res.send(records.recordset);
                mssql.close();
            });
        }
    });
});