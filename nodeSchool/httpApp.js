  

// var http = require(http)

var url = process.argv[2]
console.log(url)


// http.get(url, callback)

// Callback ==>
// function callback (response) { /* ... */ }

//  nos interesan los eventos: "data", "error" y "end". Para escuchar un  
//   evento debes hacer:  
   
//      response.on("data", function (data) { /* ... */ })  

//   Por omisión, los objetos 'data' recibidos son Buffers de Node que  
//   deben ser convertidos a Strings para luego ser escritos en consola. Sin  
//   embargo, el objeto response que obtienes de http.get() tiene un método  
//   setEncoding() que permite definir cómo se leen los bytes obtenidos. Si lo  
//   llamas con parámetro "utf8" recibirás Strings en los eventos emitidos.  


// el objeto response que obtienes de http.get() tiene un método  
//   setEncoding() que permite definir cómo se leen los bytes obtenidos. Si lo  
//   llamas con parámetro "utf8" recibirás Strings en los eventos emitidos