var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

//Tell Express the views are in the views directory
app.set("views",path.resolve(__dirname,"views"));

//Tell Express to use the EJS view engine
app.set("view engine","ejs");

app.get("/",function(request, response){
    response.render("index",{
        firstName:"Ashlee",
        lastName:"Correll",
        address:"1234 North Rd."
    });
});

http.createServer(app).listen(8090,function(){
    console.log("EJS-View app started on port 8090.");
});

