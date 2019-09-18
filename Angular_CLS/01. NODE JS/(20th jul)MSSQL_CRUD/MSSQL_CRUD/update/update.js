//import express module
let express = require("express");
//import mssql module
let mssql = require("mssql");
//create and export the module
module.exports = express.Router().post("/",(req,res)=>{
    //connect to SQLServer
    mssql.connect({
        server : "localhost",
        user : "sa",
        password : "123",
        database : "testdb"
    },(err)=>{
        if(err)
            throw err;
        else{
            //create the query object
            let request = new mssql.Request();
            //update the table
            request.query(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost} where p_id=${req.body.p_id}`,(err,result)=>{
                if(err)
                    res.send({update:"fail"});
                else
                    res.send({update:"success"});
                mssql.close();
            });
        }
    });
});