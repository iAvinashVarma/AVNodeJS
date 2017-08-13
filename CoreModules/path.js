var path = require('path');
var websiteHome = "C:\\inetpub\\wwwroot\\iisstart.htm";
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));