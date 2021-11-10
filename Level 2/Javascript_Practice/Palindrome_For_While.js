var str1 = "madam";
var str2 = "";

/*for(i=str1.length-1;i>=0;i--){

    str2 = str2 + str1.charAt(i);
    console.log(str2);

}

for(j=str1.length-1;j>=0;j--){

    str2 = str2 + str1.charAt(j);
}
if(str1==str2){
    console.log("Yay, It is a palindrome")
}
else{
    console.log("Oops, It is not a palindrome");
}


for(z=0;z<=str1.length;z++){

    str2 = str2 + str1.charAt(j);
}
if(str1==str2){
    console.log("Yay, It is a palindrome")
}
else{
    console.log("Oops, It is not a palindrome");
}*/

var str1 = "madam";
var str2 = "";


var q = str1.length-1;
while(q>=0){
    str2 = str2 + str1.charAt(q);
    q--;
}
if(str1 == str2){
console.log("Hurray");}
else{
    console.log("OOps");
}
