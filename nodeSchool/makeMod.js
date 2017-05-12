var fs = require('fs')
var path = require('path')

module.exports.makeModul =

function myModule(folder, extension, function(err, list) {
}

var data = function(folder, extension, function(err, list) {
	 if (err) throw err
        fs.readdir(folder,  {
            listOfFiles = list}

//             var arr
//             ºayFilesWithRightExtension = listOfFiles.filter(function(nameOfFile) {
//                 if (nameOfFile.includes(extension) === true)
//                     console.log(nameOfFile)
//             })
//         })



// var data = fs.readFile(file, 'utf-8', function(err, data) {
//     if (err) throw err
//     data.toString()
//     var inPieces = data.split('\n')
//     console.log(inPieces.length - 1)
// })


// fs.readdir(filesName, function(err, list) {
//     if (err) throw err
//     var listOfFiles = list

    // using map() with 'listOfFiles'
    // to select elements finished in 'extension'

    var arrayFilesWithRightExtension = listOfFiles.filter(function(word) {
        if (word.includes('.' + extension) === true)
            console.log(word)
    })
})
