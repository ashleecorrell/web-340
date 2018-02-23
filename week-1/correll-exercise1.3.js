
var header = require('../header.js'); 

console.log(header.display("Ashlee", "Correll", "Exercise 1.3")); 
console.log("\n");

/*
Title: Exercise 1.3

Author: Richard Krasso

Date: 23 February 2018

Modified by: Ashlee Correll

Description: JavaScript coding assignment to learn about modules.
*/

var url = require("url");

var parsedURL = url.parse("https://www.learningjs.com/profile?title=boss");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);