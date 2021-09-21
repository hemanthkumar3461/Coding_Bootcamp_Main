var http=require("http");
var fs=require("fs");

var port = 3000;
var host = "127.0.0.1";

var server = http.createServer(function(req,res){
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    fs.readFile("sample.html",function(err,data){
        if(!err){
            res.write(data);
            res.end()
            
        }
    })
    
});

server.listen(port,host,function(){
    console.log("server started");
})