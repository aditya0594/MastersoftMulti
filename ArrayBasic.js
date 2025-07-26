
// If use the let keyword you can't re declared the same variable/ 


// Array of asssigning the value 
var marks = Array(6);
var marks = new Array(3,4,5,6,7); 

var mark = [1,2,3,4]  // this is our array this easy and valid statement

console.log("----------using the index ------------")
console.log(mark[2]); //3
mark[2] = 50;
console.log(mark);
console.log(mark.length);
mark.push(10);  // this will add the element at the end of array 
console.log(mark);
mark.pop() // it will delete end element that last added element 
mark.unshift(0); // this add the element at a beginning of the array
console.log(mark)
console.log(mark.indexOf(9));  // this will tell in which element is present

console.log(mark.includes(9));  // To check is present in array or not // it will give the boolean value. 

console.log("----------slice of array ----")
submarks = mark.slice(2,5);  
console.log(submarks);
console.log(mark);


console.log("----------for loop for array and sum of element  -------------")
let sum = 0;
for(let i = 0; i<mark.length; i++){
    console.log(mark[i]);
    sum = sum + mark[i]
}
console.log(sum);

console.log("----------sum by using the Reduce filter map -------------")
//reduce filter map 

let total = mark.reduce((sum, marks)=>sum+marks,0)   //it take two argument // the sum is your accumulator here. 
                                                    // when you say accumulator, 
                                         //this value will keep on changing for every iteration, just like look '
 console.log(total);
 


 console.log("----------filter-------------")      
 var scores = [1,2,3,4,5,6];
 //print element only even a numbers and create new array of the even numbers 
 
 var evenscores =[];
for(let i = 0; i<scores.length; i++){
    console.log(scores[i]);
    if(scores[i]%2 == 0){
        evenscores.push(scores[i])
    }
}
console.log(evenscores);
// by using the filter method

let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores);

console.log("----------MAP-------------")      
 //print element only even a numbers and create new array of the even number and multiple with the 3 
// to create a new array we can use the map method
 let multpleEvenScorces = newFilterEvenScores.map(score=>score*3)
console.log(multpleEvenScorces);

////print element only even a numbers and create new array of the even number and multiple with the 3 and sum them 

let sumOfmultiplevalues = multpleEvenScorces.reduce((sum,values)=>sum+values,0);
console.log(sumOfmultiplevalues);


var scores1 = [1,2,3,4,5,6]
let sumofArray = scores1.filter(score=>score%2==0).map(scores=>scores*3).reduce((sum,values)=>sum+values,0);
console.log(sumofArray);


console.log("----------practices-------------")      
var arr = [1,2,3,4,5,6]
let totalSum = arr.reduce((sum,value)=>sum+value,0);
console.log(totalSum);
let filterArray = arr.filter(arr=>arr%2==0)
console.log("filter array"+filterArray);
let arrOfmap = arr.map(arr=>arr*2);
console.log(arrOfmap);


console.log("----------array duplicate-------------")     

let arr1 = [1,2,3,4,5,6,7]
let arr2 = [1,2,3,4,5,6,7]

let result = arr1.filter(value=>arr1==arr2)





let flag = true;
if(arr1.length==arr2.length){
    for(let i=0; i<arr1.length;i++ ){
        if(arr1[i] !==arr2[i]){
            flag = false;
            break;
        }
    }
}
else{
    flag = false;
}

  if(flag == false){
    console.log("Array value are not similar");
  } 
  else if(flag == true){
    console.log("Array value are similar");
  }

