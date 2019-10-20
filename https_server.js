var express = require('express');
var https = require('https');
var fs = require('fs');

var options = {
   key: fs.readFileSync('/home/pc/datadisk0/certs/pcvm1.centralus.cloudapp.azure.com.key').toString(),
   cert: fs.readFileSync('/home/pc/datadisk0/certs/pcvm1.centralus.cloudapp.azure.com.crt').toString(),
   passphrase: "chahal"
};

//console.log(options.key);

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.post("/", function(req, res) {
//    res.writeHead(200);
//    res.write(req.method);
//    res.write(req.headers);
//    res.write(req.url);
//    res.write(req.body)
//    res.end("");
//    
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
https.createServer(options, app).listen(8081);
