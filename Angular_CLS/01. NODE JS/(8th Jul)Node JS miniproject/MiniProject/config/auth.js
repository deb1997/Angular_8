/*
    this file used to compare the client token with server token
*/
module.exports = (req,res,next)=>{
    let all_headers = req.headers;
    let c_token = all_headers.token;

    let obj = require("./token");
    let s_token = obj.token;

    if(c_token == s_token){
        next();
    }else{
        res.send("UnAuthorized User...!");
    }
};