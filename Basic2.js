const flag = true;


if(!flag){
    console.log("condition is satified");
}else   
{
   console.log(flag);
   
   console.log("condition is not satified");
}
console.log("------------------While loop -------------------");
// if have any condition after condition become true we will do the action in that case we use the while 
// if we want to repeat the loop based upon any condition then we use the while loop
let i = 0
while(i>10){
    i++;
    console.log("i am inside loop : " + i);
}


console.log("------------------Do While Loop -------------------");

do{
i++
}while(i>10){
console.log(i);
}

console.log("------------------for loop-------------------");

// if decide to how many time we have to run loop then we use the for loop
let k = 0; 
for(k;k<10;k++){
    console.log(k); 
}

console.log("------------------2 to 5 common multiple number-------------------");

// 2 to 5 common multiple number
let n = 0;
for(let j=1; j<=100; j++)
{
    if(j%2 == 0 && j%5==0){ 
        n++;
        console.log(j);
        if(n==3)
            break
    }
}


