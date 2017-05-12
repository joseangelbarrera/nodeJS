// requiring fs

var fs = require('fs')

// I recibe the directory where the files are

var filesName = process.argv[2]

// I recibe the file extension in an string

var extension = process.argv[3]

// I look for files names from the directory in an array called 'ListOfFiles'

fs.readdir(filesName, function(err, list) {
    if (err) throw err
    var listOfFiles = list

    // using map() with 'listOfFiles'
    // to select elements finished in 'extension'

    var arrayFilesWithRightExtension = listOfFiles.filter(function(word) {
        if (word.includes('.' + extension) === true)
            console.log(word)
    })
})

//  Doubt: how to use 'path.extname(path') in this context to simplify the code


//  Here's the official solution in case you want to compare notes:

// ─────────────────────────────────────────────────────────────────────────────

//     var fs = require('fs')
//     var path = require('path')

//     var folder = process.argv[2]
//     var ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })
