/*
    this file used to create and return the mysql connection object
*/
module.exports = function(){
    return require("./imports").mysql.createConnection(require("./mysql_properties"));
};