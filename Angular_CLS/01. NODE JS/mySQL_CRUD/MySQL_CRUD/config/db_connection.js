/*
    this file used to create and return the mysql connection object
*/
module.exports = {
    getConnection   :   ()=>{
        return require("./imports").mysql
        .createConnection(require("./db_properties"));
    }
};