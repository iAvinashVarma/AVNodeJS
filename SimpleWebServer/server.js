var http = require('http');
var fs = require('fs');
var port = 999;

// 404 Response.
function send404Reponse(response){
    response.writeHead(404, {"Context-Type":"text/plain"});
    response.write("Error 404: Page Not Found - Avi.");
    response.end();
}

// Handle a user request.
function onRequest(request, response){
    if(request.method == 'GET' && request.url == '/'){
        response.writeHead(200, {"Context-Type":"text/html"});
        fs.createReadStream('./SimpleWebServer/index.html').pipe(response);
    }
    else {
        send404Reponse(response);
    }
}

http.createServer(onRequest).listen(port);
console.log("Server with port " + port + " is now running....");