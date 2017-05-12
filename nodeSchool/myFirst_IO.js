var fs = require('fs')

var data = fs.readFileSync(process.argv[2])
var str = data.toString('utf8')

var inPieces = str.split('\n')
console.log(inPieces.length -1)
