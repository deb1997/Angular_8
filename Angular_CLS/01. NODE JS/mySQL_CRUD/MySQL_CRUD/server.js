//import express module
let express = require("./config/imports").express;
//import bodyparser module
let bodyparser = require("./config/imports").bodyparser;
//import cors module
let cors = require("./config/imports").cors;
//create the rest object
let app = express();
//set the json as MIME Type
app.use(bodyparser.json());
//parse the json
app.use(bodyparser.urlencoded({extended:false}));
//enable the cors
app.use(cors());
//use the fetch module
app.use("/fetch",require("./fetch/fetch"));
//use the insert module
app.use("/insert",require("./insert/insert"));
//use the update module
app.use("/update",require("./update/update"));
//use the delete module
app.use("/delete",require("./delete/delete"));
//assign the port
app.listen(8080);
console.log("server listening the port no.8080");