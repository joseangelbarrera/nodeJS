var http = require('http')

var server = http.createServer()

// var PORT = 3000 (this is the old way)
// mac user is this way:
var PORT = process.env.PORT || 3000

//if I do not specify port it works with PORT 3000 using '||' 

// write into terminal: PORT=3005 node app.js

server.on('request', function(req, res) {
    res.end("Success, end of request")
})

server.listen(3000, function() {
    console.log('Listening on PORT ' + PORT)
})
