var fs = require("fs");//This for importing file system library and storing it in var fs
//console.log(1);//prints on screen

//fs.readFile("sample.txt",function(err,data){ //In this line we are performing read operation or method, and funtion takes 2 object parameters err obj and data object
//console.log("error is ...."+err);
//console.log("Data is ...."+data);
//});
//console.log(2);
//In the above program is asynchrounous funtion, it needs callbacks


//let us do it in a synchrnous function, this dont need callbacks
//console.log(1);
//console.log(2);
//var result = fs.readFileSync("sample.txt"); //We store read file content in var result, Here we are using synchrounous way of reading function
//console.log(result.toString());//in this result is convereted into string
//console.log(33)










/*var http=require("http"); Importing http library to use its funtions
var fs=require("fs");

var port = 3000; Many ports have many functionalities, 3000 is free port. so we use it to create our server
var host = "127.0.0.1";//It is the physcial system address

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
})*/


