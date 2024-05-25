//exports
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const {connectMongoDb} = require("./connection/connect")
const {checkForAuthorization, restrictionTo} = require("./middleware/auth")

//importing routes
const urlRouter = require("./route/router");
const staticRoute = require("./route/staticrouter")
const userRoute = require("./route/user");

//init express
const app = express();

//connections to Database
connectMongoDb("mongodb://localhost/short-url")
.then(()=>{console.log("mongo is started")});

// Middlewares 
app.use(express.json()); //for jason output
app.use(express.urlencoded({extended : false})); // html output
app.use(cookieParser()); // for maintain the token within the device
app.use(checkForAuthorization); // check the authorization of the user

//template engine
app.set('view engine', 'ejs'); // display hte html file
app.set('views', path.resolve( './views')); // directory of the ejs file

//router
app.use("/url",restrictionTo(["Normal","Admin"]),urlRouter);  // display the history of the urls created
app.use("/" , staticRoute); // home page  route
app.use("/user", userRoute); // handles the user login and signup , display page login amd signup

//start the server 
app.listen(80, () => { console.log("Server is started") });
