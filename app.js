    // let sqlQuery = ``; 
    // connection.query(sqlQuery, function(err, result) {
    //     if (err) throw err; 
    // })

const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 

app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static("Public"));

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1', 
    port: '3306',
    user: 'root', 
    database: 'user_data', 
    password: 'password'
}); 

connection.connect((error) => {
    if (error) {
        console.log(error);
        return; 
    }
    console.log("Connection established successfully");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html"); 
})


app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000");
  });
