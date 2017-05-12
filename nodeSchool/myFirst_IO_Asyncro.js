var fs = require('fs')

// we call to the path of file:

var file = process.argv[2]

/// console.log (file)

// we use the readFile method to read the file and then we
// convert to string the data in order to count the lines

var data = fs.readFile(file, 'utf-8', function(err, data) {
    if (err) throw err
    data.toString()
    var inPieces = data.split('\n')
    console.log(inPieces.length - 1)
})


//  Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var fs = require('fs')
//     var file = process.argv[2]

//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
