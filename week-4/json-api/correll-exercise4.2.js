
/*
Title: Assignment 4.2

Author: Richard Krasso

Date: 20 March 2018

Modified by: Ashlee Correll

Description: Exercise to learn about Express API.
*/

var express = require ("express");
var http = require ("http");


var app = express ();

//create a get request
app.get("/customer/:id", function (request, response){
    var id = parseInt(request.params.id, 10);
    //return a json object
    response.json({
        firstName: "Ashlee",
        lastName: "Correll",
        employeeId: id
    });
});

http.createServer(app).listen(4000,function(){
    console.log("Application started on port 4000ode");
});