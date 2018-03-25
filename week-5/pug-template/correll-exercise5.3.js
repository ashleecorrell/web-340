/*
Title: Assignment 5.3

Author: Richard Krasso

Date: 24 March 2018

Modified by: Ashlee Correll

Description: Exercise to learn about pug templates.
*/
//requirment statements
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
//app setup
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response){
    response.render("index",{
        message:"Welcome to the homepage!"
    });
});
//create a server
http.createServer(app).listen(8004,function(){
    console.log("Application started on port 8004!");
});