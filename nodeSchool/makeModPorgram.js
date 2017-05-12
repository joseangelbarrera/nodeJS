
var folder = process.argv[2]
var extension = '.' + process.argv[3]

var makeModProgram = require()
var mmakeModul = require('./makeMod').makeModul

makeModul(folder, extension)