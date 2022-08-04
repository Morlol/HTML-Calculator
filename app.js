const express = require("express");
const app = express();
const path = require('path');

app.use(express.static("Public"));

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, '/html/home.html'));
});
app.get("/calculator", function(req, res) {
    res.sendFile(path.join(__dirname, '/html/calculator.html'));
});


// The 404 Error page
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "html/404.html"));
});

app.listen("2727", function(){
    console.log("Everything working")
});