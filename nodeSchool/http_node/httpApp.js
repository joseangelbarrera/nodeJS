var http = require('http')
var fs = require('fs')

var url = process.argv[2]

http.get(url, function(response) {
    response.setEncoding('utf-8')
    response.on("data", function(chunk) {
        console.log(chunk)
    })
    response.on("error", function(error) {
        console.log(error)
    })
})

// option 2 ==>
// response.pipe(process.stdout)

// option 3  ==>
// on('data', console.log)