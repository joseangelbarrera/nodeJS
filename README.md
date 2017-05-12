# NodeJS

Node is a system to run javascript from the server. It is a group of modules (files).

Is a system to separate our code in different files. In order to do it, we use the keyword

`require`
 
Require can call other files

 also you can use it to install some module npm in order to use in our app
 when they do not find something they go to the module archives into the carpet.

 `module.exports`

 practicaly module.exports and exports is the same, bu module.export is an object and we can add proprierties.

 about time:

 momentjs (see the package)

 npm install moment

 npm install --save

 See [package jason](https://docs.npmjs.com/files/package.json)


 -- save (see this atribute in order to know how the deendecnies are instaled into the jason package)




To accesss to the argumetns of a function from node:


Modulos node (core)

##process

The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().

http://www.hacksparrow.com/understanding-directory-references-in-node-js.html


El objeto process es global y es una instancia de EventEmitter.

# process.cwd
directorio actual del proceso (directorio desde donde se llama el archivo, directorio donde se ejecuta node)

# process.argv

<Array>

contiene los argumentos que se le pasan a la llamada del archivo con node, siendo process.argv[0] el propio comando node.

Con __dirname podemos obtener el directorio del archivo que está siendo ejecutado

process.argv is an array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched.

* The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed.

* The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments.





process.

`arg`

for arguments

PORT=3005 node app.js



 npm install --save


# Modulos node (require)

## http:
`var http = require('http');`
Utilidades para manejar servidores y clientes HTTP desde node.

## url:
`var url = require('url');`
Utilidades para parseado y obtencion de info de url's.

## path:
`var path = require('path');`
Utilidades para manejo y transformaciones de rutas de archivos.

### métodos de path:

***path.extname(path)***

path <string>
Returns: <string>

The path.extname() method returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last portion of the path. If there is no . in the last portion of the path, or if the first character of the basename of path (see path.basename()) is ., then an empty string is returned.

```
path.extname('index.html')
// Returns: '.html'

path.extname('index.coffee.md')
// Returns: '.md'
```

*******************



## fs
`var fs = require('fs');`
FileSystem. Manejo de archivos desde node.js

### métodos de fs:
***readFile()***
Asynchronously reads the entire contents of a file. Example:

```
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

***fs.readFile(file[, options], callback)***
file <string> | <Buffer> | <integer> filename or file descriptor
options <Object> | <string>
encoding <string> | <null> default = null
flag <string> default = 'r'
callback <Function>

***fs.readdir(path[, options], callback)***
readdir()
The fs.readdir() method takes a pathname as its first argument and a  
callback as its second. The callback signature is:  
   
    function callback (err, list) { /* ... */ }  
where list is an array of filename strings.

path <string> | <Buffer>
options <string> | <Object>
    encoding <string> default = 'utf8'
callback <Function>

Asynchronous readdir(3). Reads the contents of a directory. The callback gets two arguments (err, files) where files is an array of the names of the files in the directory excluding '.' and '..'.

The optional options argument can be a string specifying an encoding, or an object with an encoding property specifying the character encoding to use for the filenames passed to the callback. If the encoding is set to 'buffer', the filenames returned will be passed as Buffer objects.

## request
`var request = require('request');`
Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

```
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

Devuelve el cuerpo de la página que se solicita. Si no se da nos devuelve un error.



## Creando nuestros modulos

`export` define lo que será devuelto a `require


## archivo 'package.json'
Debemos crear un archivo 'package.json' donde van a reflejarse todos los módulos empleados.

`npm init`


El comando superior utilizado en terminal crea el 'package.json'

`npm init -yes` 

El comando superior utilizado en terminal crea el 'package.json' siin necesidad de respoder ninguna pregunta ya que da por defecto si.


## Carpeta 'node-modules'
Los módulos empleados deben estar alojados en una carpeta llamada 'node-modules' que se crea automaticamente desde el terminal al llamar a la instalacion del módulo.

## Cómo evitar subir los modulos al git.
Tenemos que tener en cuenta que este paquete no debe subirse a github. Para ello debemos crear una archivo. `.gitignore` donde incorporaremos el el nombre de la carpeta que no deseamos subir.

## Cómo instalar todas las dependencias que nos faltan cunado nos descargamos un repositorio.

Con la lamada `npm install` realizada del terminal una vez que nos hayamos clonado los archivos de un repositorio podremos bajarnos todos los módulos necesarios. Estos módulos han quedado reflejados en el archivo package.json Por eso es tan importante crearlo.


## Variables de entorno

puedes acceder a conocer las variables de entorno de mac utilizando en terminal el comando:

`env`


```
TERM_PROGRAM=Apple_Terminal
SHELL=/bin/bash
TERM=xterm-256color
HISTSIZE=32768
TMPDIR=/var/folders/6w/s2rwrb9x7576jwd4fy0k90pr0000gn/T/
Apple_PubSub_Socket_Render=/private/tmp/com.apple.launchd.IkdzuEsCTN/Render
TERM_PROGRAM_VERSION=388.1
OLDPWD=/Users/joseangel/SKYLAB_CODERS
TERM_SESSION_ID=42D2C176-7E74-4D01-B3A7-9DCDF55276E9
LC_ALL=en_US.UTF-8
HISTFILESIZE=32768
USER=joseangel
SSH_AUTH_SOCK=/private/tmp/com.apple.launchd.DsHQ80H9sH/Listeners
__CF_USER_TEXT_ENCODING=0x1F5:0x0:0x8
PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin
PWD=/Users/joseangel/SKYLAB_CODERS/nodeJS
EDITOR=vim
LANG=en_US
XPC_FLAGS=0x0
HISTIGNORE=ls:ls *:cd:cd -:pwd;exit:date:* --help
HISTCONTROL=ignoredups
XPC_SERVICE_NAME=0
MANPAGER=less -X
SHLVL=1
HOME=/Users/joseangel
LOGNAME=joseangel
_=/usr/bin/env

```


look at the editor: by default vim

console.log(process.env.EDITOR)

it returns

vin

`process.env.`


###PODEMOS LEER LAS VARAIBLES DE ENTORNO DESDE AQUÍ

también podemos leer las varaibels de entorno

how to read the 'variabels de entorno'

how to add varaibes de entorno into terminal:

$ `MY-NAME=juanma node app.jsn 89 10`

(89 y 10 son los posibles valores que le toquen usar a este archivo node al que se está invocando)

prcess.env



----


#Node Exercises

1. Connection to the server

Write a node.JS program that execute a connection to server and return success message like "Success, i'm listening from port: 3000"

Hint: You need npm module - http

### Extra

Set the port of the connection using an environment variable PORT



----



# 2. Show Content

Write a node program that read a file (passed as parameter) in local machine and shows in the console the content of it.

node app.js test.txt
Hint: You need npm module - fs





```
var fs = require('fs')
var path = require('path')

var fileToRead = process.argv[2]
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
```

----


readFile metodo de fs
cada uno de los metodos asyncronos recibe un parámetro diferente

el callback (err y data)

cuando termine la fuciñon se le pasa a la ncion calla back err y data.


**Synconous - Asyncronous**

It is relative to the execution of the command line instructions.




#streams
read the teacher notes

4 kinds of strems in note

-- you can write or read --
* readeble
* writeable

-- you can write and read --
* duplex
* transform

instances of EvenEtmitter


data
enr
error
finish

lectire of streams

## Methods:

`fs.createReadStream('input.txt')

it returns a string


ç
process
process.argv
process.env
process.stdout
process.stdin

#Stream

[notes of Juanma](https://gist.github.com/juanmaguitar/75a007ea2343f79068996bfbe7dcf47a)


Los streams son objetos que te permiten leer o escribir datos de manera continua. En node.js tenemos 4 tipo de streams:

* Readable: Para leer datos
* Writable: Para escribir datos
* Duplex: Para leer/escribir datos
* Transform: Un tipo de duplex donde la salida de datos es procesada a partir de la entrada de datos

Cada tipo de stream es una instancia de EventEmitter y emite diferentes eventos en diferentes momentos del stream.

Para ver los mas comunes vamos a crear un archivo y lo vamos a leer tanto en el caso de lectura como en el de escritura:

## LECTURA DE STREAMS

1º Llamamos al módulo 'fs' que es el que se encarga de gestionar los archivos en nodeJS:

```
var fs = require("fs");
var data = '';
```

2º Creamos un stream que leerá un archivo 'imput.txt' e introducimos los datos en una variable `readableStrea

```
var readableStream = fs.createReadStream('input.txt');
```

3º Convertimos los datos de `readableStream` que se recogen al set de caracteres utf8. 

```
readableStream.setEncoding('UTF8');
```

Atrapamos los tres eventos de stream más importantes:

--> data
--> end
--> error

- data: cuando los trozos de datos están disponibles para ser leídos. En el ejemplo inferior los pasamos por una función para reunirlos todos en un único archivo.

```
readableStream.on ('data', function(chunk) {
   data += chunk;
});
```

- end es el evento que se recoge cuando no hay más datos para leer

```
readableStream.on('end',function(){
   console.log(data);
});
```

- error cuando se produce algun error al leer/escribir

```
readableStream.on('error', function(err){
   console.log(err.stack);
});
```

console.log("Program Ended");


## ESCRITURA DE STREAMS

```
var fs = require("fs");
var data = 'Simply Easy Learning';
```


- Create a writable stream
- 
```
var writableStream = fs.createWriteStream('output.txt');
```

- Write the data to stream with encoding to be utf8
- 
```
writableStream.write(data,'UTF8');
```

- Mark the end of file

```
writableStream.end();
```

- finish cuando finaliza el codigo
 
```
writableStream.on('finish', function() {
    console.log("Write completed.");
});
```

- error
- 
```
writableStream.on('error', function(err){
   console.log(err.stack);
});
console.log("Program Ended");
```


```
writableStream.on('finish', function() {
    console.log("Write completed.");
});
```




Librerias:

existen librerias listas para trabajar con ellas que permiten realizar degterminadas tareas muy fácilmente. 

Por ejemplo destas dos gestionan la captiura de datos de modo asyncrono:

[async](https://npmjs.com/async)
Async is a utility module which provides straight-forward, powerful functions for working with asynchronous JavaScript. Although originally designed for use with Node.js and installable via npm install --save async, it can also be used directly in the browser.

For Documentation, visit http://caolan.github.io/async/


[after](https://npmjs.com/after)










