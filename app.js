// it requires the sum.js/sustraction.js/multiplication.js/division.js files

var sustraction = require('./operations/sustraction.js').sustraction
var division = require('./operations/division.js').division
var moment = require('moment')

// it goes to search for the module by the node_modules into the root of the project.

// to install 'momet' use the command: 'npm install moment'
// into the project files from 'termimal'

// format the data time
console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))

console.log('The sum of ' + a + ' & ' + b + ' is: ' + sum(3, 7))
console.log('The multiplication of ' + a + ' & ' + b + ' is: ' + multiplication(3, 7))

sustraction(3, 7)
division(3, 7)

// make the calculator operations by 'calculator.js'

// var sum = require('./operations/sum.js').sum
// var multiplication = require('./operations/multiplication.js').multiplication
// sum(3, 7)
// multiplication(3, 7)

// npm init into terminal creates the jason packages

// in order to avoid the git of the node_modules we must create a file named
// .gitignore (with the colon at the begining) and then, into this file write the
// files you do not want to git
