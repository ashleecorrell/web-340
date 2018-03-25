
/*
Title: Assignment 5.2

Author: Richard Krasso

Date: 24 March 2018

Modified by: Ashlee Correll

Description: Exercise to learn about ejs templates.
*/

//require statements
var express = require("express");
var http = require("http");
var path = require("path");

//app functions
app = express();
//set veiws folder
app.set("views",path.resolve(__dirname, "views"));
//set view engine
app.set("view engine", "ejs");
//create names array
var n = [
    "Mary",
    "Chuck",
    "Marsha",
    "Peter",
    "Lonnie",
];
//create get function
app.get("/",function(request,response){
    response.render("index",{
        names:n
    })
});
//create a server to listen
http.createServer(app).listen(8093,function(){
    console.log("Application started on port 8093!");
});