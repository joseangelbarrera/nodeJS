var fs = require('fs')
var path = require('path')

// we call to the path of file:

var allFilesDirection = process.argv[2]
var extension = '.' + process.argv[3]

fs.readdir(allFilesDirection, 'utf8', function(err, listOfFiles) {
    if (err) throw err
    var finalList = listOfFiles
    finalList.forEach( function
(file) {
        if (path.extname(file) === extension) {
            console.log(file)
        }
    })
})
