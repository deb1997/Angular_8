/*
    this is used to fetch the data from "portfolio" collection
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
module.exports = express.Router().get("/",
                            [require("../config/auth")],
                                (req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/miniproject",
                (err,db)=>{
    db.collection("portfolio").find().toArray((err,array)=>{
           if(err)
                throw err;
            else
                res.send(array);
    });
 });
});
