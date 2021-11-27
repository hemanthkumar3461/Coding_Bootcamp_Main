const Isnum = require('is-number');

let sub = function(first, second){
    if(Isnum(first) && Isnum(second)){
        return first-second
    }

    else{
        throw new TypeError('Error came');
    }
}


module.exports = sub;