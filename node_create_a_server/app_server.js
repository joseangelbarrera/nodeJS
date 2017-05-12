// it requieres the http module:

var http = require('http')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write("It's alive! nad it works, I can not believe it")
  response.end()
}).listen(3000)
