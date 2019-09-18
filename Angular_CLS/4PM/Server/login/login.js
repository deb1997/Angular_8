module.exports = require("../config/imports").express.Router().post("/",(req,res)=>{
    let connection = require("../config/mysql_connection")();
    connection.connect();
    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,(err,records,fields)=>{
        if(records.length > 0){
            let token = require("../config/generateToken")({
                'uname' : req.body.uname,
                'upwd'  : req.body.upwd
            },'hr@nareshit.in');
            require("../config/token").token = token;
            res.send({'login':'success','token':token});
        }else{
            res.send({'login':'fail'});
        }
    });
});