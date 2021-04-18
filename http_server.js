var express = require('express');
var http = require('http');
var fs = require('fs');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get("*", function(req, res) {
    res.writeHead(200);
    r = {}
    r["method"] = "GET"
    r["path"] = req.url
    r["utc_time"] = (new Date()).toUTCString()
    r["headers"] = req.headers
    r = JSON.stringify(r)
    console.log(r)
    res.end(r);
})

http.createServer(app).listen(3000);
