/*
    this module used to insert the data in products collection
*/
//import express module
let express = require("express");
//import mongodb module
let mongodb = require("mongodb");
//create the client
let nareshIT = mongodb.MongoClient;
//create and export the module
module.exports = express.Router().post("/",(req,res)=>{
    let obj = {
        'p_id':req.body.p_id,
        'p_name':req.body.p_name,
        'p_cost':req.body.p_cost
    };
    nareshIT.connect("mongodb://localhost:27017/testdb",
                            (err,db)=>{
        db.collection("products").insertOne(obj,
                                      (err,result)=>{
            if(err)
                res.send({insert:"fail"});
            else
                res.send({insert:"success"});
        });
    });
});