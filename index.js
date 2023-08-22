var http = require('http'); //con la s es seguro (pero no se porque no me funciona)
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');}
).listen(3000);