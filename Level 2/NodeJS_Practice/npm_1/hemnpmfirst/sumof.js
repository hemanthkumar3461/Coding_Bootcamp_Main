const isNum = require("is-number");

let sum = function(first, second){
    if(isNum(first) && isNum(second)){
        return first + second;
    }

    else{
        throw new TypeError("Not correct");
    }
}

module.exports = sum;
