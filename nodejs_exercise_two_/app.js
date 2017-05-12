var fs = require('fs')
var filetoToRead = process.argv[2]

// console.log('you want to read the file:' + filetoToRead)


// this func

// fs.readFile(filetoToRead, 'utf8', function(err, contentFile){
// 	if (err) throw err;
// 	console.log(contentFile)
// })


// now write: $ node app.js data.txt in terminal


// they a readFileSync for syncronous operations:

fs.readFileSync(filetoToRead, 'utf8', function(err, contentFile){
	if (err) throw err;
	console.log(contentFile)
})



console.log('Resposne before the text...')


----


var fs = require('fs')
var path = require('path')

var fileToRead = process.argv[2]


/*# process.argv
process.argv is an array containing the command line arguments.
The first element will be 'node', the second element will be
the name of the JavaScript file.
The next elements will be any additional command
line arguments.
*/

var pathToRead = path.join('docs', fileToRead)

/* Asynchronous Way */
fs.readFile(pathToRead, 'utf8', function (err, contentFile) {
  if (err) throw err
  console.log(contentFile)
})

/* Synchronous Way */
// var contentFile = fs.readFileSync(pathToRead, 'utf8')
// console.log(contentFile)

console.log('after readFile...')


