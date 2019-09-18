module.exports = require("../config/imports").express.Router().get("/",[require("../config/auth")],(req,res)=>{
    let mssql = require("../config/imports").mssql;
    mssql.connect(require("../config/mssql_properties"),(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`select * from contact`,(err,records)=>{
                if(err)
                    throw err;
                else
                    res.send(records);
                mssql.close();
            });
        }
    });
});