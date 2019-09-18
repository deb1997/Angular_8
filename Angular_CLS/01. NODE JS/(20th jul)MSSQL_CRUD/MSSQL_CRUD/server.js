/*
    this file used to collabrate the modules
*/
//import express module
let express = require("express");
//import body-parser module
let bodyparser = require("body-parser");
//import cors module
let cors = require("cors");
//create the rest object
let app = express();
//set the JSON as MIME Type
app.use(bodyparser.json());
//parse the JSON
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