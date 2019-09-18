/*
    this module used to update the data in products collection
    update p_name & p_cost based on p_id
*/
//import express module
let express = require("express");
//import mongodb module
let mongodb = require("mongodb");
//create the client
let nareshIT = mongodb.MongoClient;
//create and export the module
module.exports = express.Router().post("/",(req,res)=>{
    let obj1 = {'p_id':req.body.p_id};
    let obj2 = {$set:{'p_name':req.body.p_name,
                      'p_cost':req.body.p_cost}};
    nareshIT.connect("mongodb://localhost:27017/testdb",
                        (err,db)=>{
        db.collection("products")
          .updateOne(obj1,obj2,(err,result)=>{
            if(err)
                res.send({update:"fail"});
            else
                res.send({update:"success"});
        });
    });
});











