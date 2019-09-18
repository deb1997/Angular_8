module.exports = require("../config/imports").express.Router().get("/",[require("../config/auth")],(req,res)=>{
    let mongodb = require("../config/imports").mongodb;
    let nareshIT = mongodb.MongoClient;
    nareshIT.connect("mongodb://localhost:27017/miniproject",(err,db)=>{
        db.collection("portfolio").find().toArray((err,array)=>{
            if(err)
                throw err;
            else
                res.send(array);
        });
    });
});