var fs = require('fs')
var path = require('path')

// we call to the path of file:

function myModule(filesDirectory, extension, callback) {

    fs.readdir(filesDirectory, function(err, files) {
    	if(err) {
    		return callback(err)
    	}
        var listOfFiles = files.filter(function(finalFile) {
            return path.extname(finalFile) === ('.' + extension)
        })

        callback(null,listOfFiles)
    })

}


module.exports = myModule