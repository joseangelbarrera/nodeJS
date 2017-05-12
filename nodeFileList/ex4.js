var fs = require('fs')
var request = require('request')

// var fileToRead = process.argv[2]
// process.argv is an array containing the command line arguments.
// The first element will be 'node', the second element will be the name
// of the JavaScript file. The next elements will be any additional
// command line arguments.
// var pathToRead = path.join('docs', fileToRead)
/* Asynchronous Way */

// fs.readFile('./link.txt', 'utf8', function (err, contentFile) {
//   if (err) throw err
//   console.log(contentFile)
// })


// fs.readdirSync
// fs.readdirSync(path[, options])


fs.readdirSync('./', 'utf8', data)
	 	console.log(data)
	 console.log('test')

// fs.readdirSync('./', 'string')


// path <string> | <Buffer>
// options <string> | <Object>
// encoding <string> default = 'utf8'

// Synchronous readdir(3). Returns an array of filenames excluding '.' and '..'.


// fs.lstatSync
// fs.lstatSync(path)#
// path <string> | <Buffer>
// Synchronous lstat(2). Returns an instance of fs.Stats.



// isDirectory()
// fs.lstatSync('./').isDirectory()




