var express = require('express');
var app = express();
var server;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
