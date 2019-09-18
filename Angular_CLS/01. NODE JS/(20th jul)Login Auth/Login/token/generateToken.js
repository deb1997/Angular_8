/*
    this file used to create and return the token
*/
module.exports = (obj,password)=>{
    return require("../config/imports").jwt.encode(obj,password);
};