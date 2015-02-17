var connect     = require("connect");
var http        = require("http");
var serveStatic = require("serve-static");

var app = connect();

app.use(serveStatic("./src"));

var server = http.createServer(app).listen();

console.log("http://localhost:" + server.address().port);