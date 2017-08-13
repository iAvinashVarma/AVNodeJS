var connect = require('connect');
var http = require('http');
var app = connect();
var port = 888;

function profile(request, response){
    console.log("User requested profile.");
}

function forum(request, response){
    console.log("User requested forum.");
}

function about(request, response){
    console.log("User requested about.");
}

app.use('/profile', profile);
app.use('/forum', forum);
app.use('/about', about);
http.createServer(app).listen(port);
console.log("Server with port " + port + " is running...");