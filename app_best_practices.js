// it requires the sum.js/sustraction.js/multiplication.js/division.js files

var sustraction = require('./operations/sustraction.js').sustraction
var division = require('./operations/division.js').division
var today = require('moment')
// format the data time
console.log(today().format('dddd, MMMM Do YYYY, h:mm:ss a'))

console.log('The sum of ' + a + ' & ' + b + ' is: ' + sum(3, 7))
console.log('The multiplication of ' + a + ' & ' + b + ' is: ' + multiplication(3, 7))

sustraction(3, 7)
division(3, 7)

// make the calculator operations by 'calculator.js'

// var sum = require('./operations/sum.js').sum
// var multiplication = require('./operations/multiplication.js').multiplication
// sum(3, 7)
// multiplication(3, 7)
