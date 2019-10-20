var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.post("/", function(req, res) {
//    console.log(req.body)
//    res.writeHead(200);
//    res.end("POST: hello world\n");
//})

app.get("*", function(req, res) {
    console.log("GET request");
    res.writeHead(200);
    res.write("Path: " + req.url + "\n");
    for(var header in req.headers) {
        res.write(header + ": " + req.headers[header] + "\n");
    }
    res.end("");
})

http.createServer(app).listen(8080);
