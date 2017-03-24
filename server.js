var PORT = process.env.PORT || 8080;
var restify = require('restify');

var server = restify.createServer({
  name: 'smart-garden',
  version: '1.0.0'
});

function logRequests(field, device, value, res) {
  var answer = "==============="
  answer += "\ndevice = " + device;
  answer += "\n"+ field + " = " + value;
  console.log(answer);
  res.send("data logged");
}

server.get('/temp/:device/:value', function(req, res, next) {
  logRequests("temp", req.params.device, req.params.value, res);
});

server.get('/humidity/:device/:value', function(req, res, next) {
  logRequests("humidity", req.params.device, req.params.value, res);
});

server.get('/moisture/:device/:value', function(req, res, next) {
  logRequests("moisture", req.params.device, req.params.value, res);
});

server.listen(PORT, function () {
  console.log('App listening on port %s', PORT);
});