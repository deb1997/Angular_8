//this file is the main file
//this file used to import the modules

//import express module
let express = require("express");
//import body-parser module
let bodyparser = require("body-parser");
//import cors module
let cors = require("cors");
//create the rest object
let app = express();
//set the JSON AS MIME Type
app.use(bodyparser.json());
//parse the json
app.use(bodyparser.urlencoded({extended:false}));
//enable the ports communication
app.use(cors());
//import login module
app.use("/login",require("./login/login"));
//import about module
app.use("/about",require("./about/about"));
//import portfolio module
app.use("/portfolio",require("./portfolio/portfolio"));
//import contact module
app.use("/contact",require("./contact/contact"));
//import logout module
app.use("/logout",require("./logout/logout"));
//assign the port no.
app.listen(8080);
console.log("server listening the port no.8080");











