/*
Title: Assignment 4.3

Author: Richard Krasso

Date: 20 March 2018

Modified by: Ashlee Correll

Description: Exercise to learn about status codes.
*/

var express = require("express");
var http = require("http");
var app = express();

app.get("/not-found", function (request, response){
    response.status(404);
    response.json({
        error: "Resource not found."
    })
});

app.get("/ok",function(request, response){
    response.status(200);
    response.json({
        message:"Page loaded correctly."
    })
});

app.get("/not-implemented", function(request,response){
    response.status(501);
    response.json({
        error: "Page not implemented."
    })
});

http.createServer(app).listen(2020, function(){
    console.log("Application started on port 2020");
});