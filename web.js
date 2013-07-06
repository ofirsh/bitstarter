var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 indexFile = fs.reafFileSync('index.html');
 fileTxt = indexFile.toString();
 response.send(fileTxt);
  // response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
