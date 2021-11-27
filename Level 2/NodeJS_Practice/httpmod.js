const http = require('http');
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer(function(req,res){

    res.write("Hello world");
    res.end();
})
server.listen(port, host, function(){
    console.log("server running")
})