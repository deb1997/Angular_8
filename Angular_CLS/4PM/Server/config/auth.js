/*
    this file used to compare the client token with server token
    server token present into "token.js" file
    client sends the token by using http headers
*/
module.exports = (req,res,next)=>{
    let allHeaders = req.headers;
    let c_token = allHeaders.token;

    let obj = require("./token");
    let s_token = obj.token;

    if(c_token === s_token){
        next();
    }else{
        res.send("UnAuthorized User...!");
    }

};


