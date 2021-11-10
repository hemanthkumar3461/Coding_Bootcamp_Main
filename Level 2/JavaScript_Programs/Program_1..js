var isPrime = function(num){

    var flag=0;
    for(var i =2;i<num;i++){
        if(num%i==0){
            flag=1;
            break;
        }
    }
    if(flag){
        return false;

    }
    else{
        return true;

    }
}
var printPrime=function(limit){
    for(var k =2;k<limit;k++){
        if(isPrime(k)){
            console.log(k);
        }
    }
}
printPrime(100);