/*
    this file used to generate the token by using jwt-simple module
*/
module.exports = function(obj,password){
    return require("./imports").jwt.encode(obj,password);
};