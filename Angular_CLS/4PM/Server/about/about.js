module.exports = require("../config/imports").express.Router()
                 .get("/",[require("../config/auth")],(req,res)=>{
    let connection = require("../config/mysql_connection")();
    connection.connect();
    connection.query(`select * from about`,(err,records,fields)=>{
        if(err)
            throw err;
        else
            res.send(records);
    });
});