let express = require("express");
let mssql = require("mssql");
module.exports = express.Router().post("/",(req,res)=>{
    mssql.connect({
        server  :   "localhost",
        user    :   "sa",
        password:   "123",
        database:   "testdb"
    },(err)=>{
        if(err)
            throw err;
        else{
           let request = new mssql.Request();
           request.query(`insert into products values(
               ${req.body.p_id},
               '${req.body.p_name}',
               ${req.body.p_cost}
           )`,(err,result)=>{
                if(err)
                    res.send({insert:"fail"});
                else
                    res.send({insert:"success"});
                mssql.close();
           });
        }
    });
});