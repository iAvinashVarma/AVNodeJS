// Core Module - File System Module (Allows you to read/write/delete a file)
var fs = require('fs');
fs.writeFileSync("NodeJS.LOG", "Howdy World!");
console.log(fs.readFileSync("NodeJS.LOG").toString());