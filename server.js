var sleep = require('thread-sleep');
var i = 0;
var holdRequiestForTime = 1000 * 60 * 60 * 1;
var status = process.argv[2] ? process.argv[2] : 200;
var holdRequest = process.argv[3] ? process.argv[3]:0;
var port = process.argv[4] ? process.argv[4]:9090;
var http = require('http');
http.createServer(function (req, res) {
  console.log(i + " :-> " + (new Date().toString()));
  i++
  
  res.writeHead(status, {'Content-Type': 'text/html'});
  res.write('Hello World!\n');
  if(!holdRequest || holdRequest == 0) {
	  res.end();
  } else {
      console.log("Going to sleep for "+ holdRequiestForTime / 1000 +" sec...");
      sleep(holdRequiestForTime);
  }
}).listen(port);
