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
    res.writeHead(200);
    r = {}
    r["method"] = "GET"
    r["path"] = req.url
    for(var header in req.headers) {
        r[header] = req.headers[header]
    }
    console.log(r)
    res.end(JSON.stringify(r));
})

http.createServer(app).listen(3000);
