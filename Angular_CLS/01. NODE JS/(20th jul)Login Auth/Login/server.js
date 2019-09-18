//create the rest object
//where "app" is the rest object
let app = require("./config/imports").express();
//bodyparser module
let bodyparser = require("./config/imports").bodyparser;
//set the json as MIME Type
app.use(bodyparser.json());
//parse the json
app.use(bodyparser.urlencoded({extended:false}));
//cors module
let cors = require("./config/imports").cors;
//enable the cors
app.use(cors());
//use the login module
app.use("/login",require("./login/login"));
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");