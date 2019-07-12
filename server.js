var http = require("http");
var port = process.env.PORT || 3000;
var app = require("./app");
var config = require("./api/config");

var server = http.createServer(app);

server.listen(port);
console.log(`Listening at ` + config.apiUrl + ` ` + port);
