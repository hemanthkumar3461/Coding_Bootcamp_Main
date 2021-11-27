const fs = require('fs');

console.log(1);

    /*fs.readFile('sample.txt',function(err,data){

        console.log(data.toString());

    })*/



let data = fs.readFileSync('sample.txt');
console.log(data.toString());

console.log(3);