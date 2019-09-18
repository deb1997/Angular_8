module.exports = require("../config/imports").express.Router()
                 .post("/",(req,res)=>{
    let connection = require("../config/db_connection").getConnection();
    connection.connect();
    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,
            (err,records,fields)=>{
        if(records.length>0){
            let token = require("../token/generateToken")({
                'uname':req.body.uname,
                'upwd':req.body.upwd
            },'hr@tcs.com');
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'fail'});
        }
    });
});