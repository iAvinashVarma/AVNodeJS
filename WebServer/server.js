var http = require('http');

function onRequest(request, response){
    console.log("A user made a request " + request.url);
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("Howdy World! - Avinash Varma.");
    response.end();
}

http.createServer(onRequest).listen(9999);
console.log("Server with port 9999 is now running....");