module.exports = require("../config/imports").express.Router()
                .get("/",[require("../config/auth")],(req,res)=>{
    require("../config/token").token = "";
    res.send({"logout":"success"});
});