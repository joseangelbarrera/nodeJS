var myModule = require('./moduleFiltered')

var filesDirectory = process.argv[2]
var extension = process.argv[3]

myModule(filesDirectory, extension, function(err, listOfFile) {
    if (err) throw err
    listOfFile.forEach(function (item) {
        console.log(item)
    })
})

