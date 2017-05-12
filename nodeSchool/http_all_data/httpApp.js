var http = require('http')
var fs = require('fs')

var url = process.argv[2]
var allData = ''

http.get(url, function(response) {
    response
        .setEncoding('utf-8')
        .on("data", function(chunk) {
            allData += chunk
        })
        .on("end", function() {
        	console.log(allData.length);
            console.log(allData);
        })
})

// Official result:

    // var http = require('http')
    // var bl = require('bl')

    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err) {
    //       return console.error(err)
    //     }
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))
    // })
