
/*
Title: Exercise 3.2

Author: Richard Krasso

Date: 11 March 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about the Morgan logger.
var express = require("express");*/

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response){
    response.render("index", {
        message:"Welcome to the jungle...Uh...I mean the Morgan Logger Example!"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});

