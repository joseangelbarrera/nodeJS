
var restaurant = 'Bar Guixot'
var people = 'skylabCoder'

function toDiner() {
    var question = "Are you sure you want go " + restaurant + " ?"
    if ( typeof(people) === 'string') {
        return  question + ' + 1';
    }
    else {
    	return '0'
    }
}

toDiner()



// var http = require('http')
// // var async = require('async')
// // var bl = require('bl')
// var aUrls = process.argv.slice(2)

// console.log('a')
// console.log(aUrls)

// var httpGets = aUrls.map(function (url) {
//   return function (callback) {
//     http.get(url, function (response) {
//       response.pipe(bl(function (err, wholeData) {
//         wholeData = wholeData.toString()
//         callback(null, wholeData)
//       }))
//     })
//   }
// })

// async.series(httpGets, function (err, results) {
//   results.forEach(function (text) {
//     console.log(text)
//   })
// })



// var async = require("async");


// var http = require('http')
//     // http ayncronous. Exercie nº 9

// var fs = require('fs')

var urlOne = process.argv[2]
var dataUrlOne = ''
console.log(urlOne)

var urlTwo = process.argv[3]
var dataUrlTwo = ''
console.log(urlTwo)

var urlThree = process.argv[4]
console.log(urlThree)
var dataUrlThree = ''


// // [async](https://npmjs.com/async)
// // [after](https://npmjs.com/after)




// async.parallel(

// 	[
// 	{
//             http.get(urlOne, function(response) {
//                 response

//                     .setEncoding('utf-8')

//                     .on("data", function(chunk) {
//                         dataUrlOne += chunk
//                     })

//                     .on("end", function() {
//                         console.log(dataUrlOne);
//                     })
//             })
//         },

//         {
//             http.get(urlTwo, function(response) {
//                 response
//                     .setEncoding('utf-8')
//                     .on("data", function(chunk) {
//                         dataUrlTwo += chunk
//                     })

//                     .on("end", function() {
//                         console.log(dataUrlTwo);
//                     })
//             })
//         },

//         {
//             http.get(urlThree, function(response) {
//                 response
//                     .setEncoding('utf-8')
//                     .on("data", function(chunk) {
//                         dataUrlThree += chunk
//                     })
//                     .on("end", function() {
//                         console.log(dataUrlThree);
//                     })
//             })
//         }
//     ],

//     function(err, results) {}


//     );




// // Official result:

// // var http = require('http')
// // var bl = require('bl')

// // http.get(process.argv[2], function (response) {
// //   response.pipe(bl(function (err, data) {
// //     if (err) {
// //       return console.error(err)
// //     }
// //     data = data.toString()
// //     console.log(data.length)
// //     console.log(data)
// //   }))
// // })
