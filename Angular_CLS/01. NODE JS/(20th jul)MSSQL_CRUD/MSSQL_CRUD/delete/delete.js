//import express module
let express = require("express");
//import mssql module
let mssql = require("mssql");
//create and export module
module.exports = express.Router().post("/",(req,res)=>{
    //connect to SQLServer
    mssql.connect({
        server : "localhost",
        user   : "sa",
        password: "123",
        database: "testdb"
    },(err)=>{
        if(err)
            throw err;
        else{
            //create the query object
            let request = new mssql.Request();
            request.query(`delete from products where p_id=${req.body.p_id}`,(err,result)=>{
                if(err)
                    res.send({delete:"fail"});
                else
                    res.send({delete:"success"});
                mssql.close();
            });
        }
    });
});