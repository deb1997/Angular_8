/*
    this module used to fetch the data from products collection
*/
//import express module
let express = require("express");
//import mongodb module
let mongodb = require("mongodb");
//mongodb follows the client server architecture
//so we must create the client
let nareshIT = mongodb.MongoClient;
//where "nareshIT" is the client

//create and export the module
module.exports = express.Router().get("/",(req,res)=>{
    //connect to testdb
    nareshIT.connect("mongodb://localhost:27017/testdb",
                            (err,db)=>{
        db.collection("products").find()
          .toArray((err,array)=>{
            res.send(array);
        });
    });
});









