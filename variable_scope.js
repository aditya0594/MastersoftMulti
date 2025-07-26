// var :  global level/ function only if it is declare inside the function only 
// let :  global level / block level that is the with in the { } curly braces 
// var and let both are reiniticialized
// const can not be altered that is we cant reiniticialized




const greet = "Evening"
//greet = "Night"

if(1==1){
    let greet = "Afternoon"
}
function add(a,b)
{
   let greet = "morning"
   return a+b;
}
let sum= add(1,2);
console.log(sum);
console.log(greet);



 