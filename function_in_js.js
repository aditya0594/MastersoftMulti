// block of code 

function add(a,b)
{
   return a+b;
}
let sum= add(1,2);
console.log(sum);

// do not have name we call this function  : Anyonymus functions----function expressions

var sumOfInteger = function(c,d){    // first way to initialize the function 
    return c + d;
}

 
var sumOfInteger1 = (c,d)=> c+d     // second way 
console.log(sumOfInteger1(3,2)); // we have to pass the parameter in the variable only 

 