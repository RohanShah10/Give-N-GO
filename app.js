const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express(); 

app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("Public"));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); 
})


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
  });