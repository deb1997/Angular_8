let express = require("./config/imports").express;
let bodyparser = require("./config/imports").bodyparser;
let cors = require("./config/imports").cors;
let app = express();
//set the JSON as MIME Type
app.use(bodyparser.json());
//parse the JSON coming from client
app.use(bodyparser.urlencoded({extended:false}));
//enable the ports communication
app.use(cors());
//use login module
app.use("/login",require("./login/login"));
//use about module
app.use("/about",require("./about/about"));
//use portfolio module
app.use("/portfolio",require("./portfolio/portfolio"));
//use the contact module
app.use("/contact",require("./contact/contact"));
//use logout module
app.use("/logout",require("./logout/logout"));
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");
