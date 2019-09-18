//this module used to delete the data from products collection based on p_id
//import express module
let express = require("express");
//import mongodb module
let mongodb = require("mongodb");
//create the client
let nareshIT = mongodb.MongoClient;
//create and export the module
module.exports = express.Router().post("/",(req,res)=>{
    let obj = {'p_id':req.body.p_id};
    nareshIT.connect("mongodb://localhost:27017/testdb",
                                                (err,db)=>{
        db.collection("products").deleteOne(obj,
                        (err,result)=>{
            if(err)
                res.send({delete:"fail"});
            else
                res.send({delete:"success"});
        });
    });
});