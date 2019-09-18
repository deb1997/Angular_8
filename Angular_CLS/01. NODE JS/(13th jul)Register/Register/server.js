//import express module
let express = require("express");
//import mongoose module
let mongoose = require("mongoose");
//import body-parser module
let bodyparser = require("body-parser");
//import cors module
let cors = require("cors");
//create the rest object
let app = express();
//set the JSON AS MIME Type
app.use(bodyparser.json());
//enable the cors
app.use(cors());
//parse the JSON
app.use(bodyparser.urlencoded({extended:false}));
//define the schema
let employess = mongoose.Schema({
    'fname':String,
    'lname':String,
    'email':String,
    'contact':Number,
    'address':String,
    'gender':String,
    'dob':Date,
    'languages':Array,
    'country':String
});
//give schema to mongodb database
let obj = mongoose.model("employees",employess);
//create the rest api
app.post("/register",(req,res)=>{
    mongoose.connect("mongodb://localhost/my_db",(err)=>{
        if(err)
            throw err;
        else{
            let newRecord = new obj({
                'fname':req.body.fname,
                'lname':req.body.lname,
                'email':req.body.email,
                'contact':req.body.contact,
                'address':req.body.address,
                'gender':req.body.gender,
                'dob':req.body.dob,
                'languages':req.body.languages,
                'country':req.body.country
            });
            newRecord.save((err,record)=>{
                if(err)
                    res.send({registration:"fail"});
                else
                    res.send({registration:"success"});
            });
        }
    });
});
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");


