//import express module
let express = require("express");
//create and export module
module.exports = express.Router().get("/",
                        [require("../config/auth")],
                            (req,res)=>{
    //delete the server token
    require("../config/token").token = "";
    res.send({logout : "success"});
});