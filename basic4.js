console.log("------sort array----------");

let arr = ["zoo","Animal","plants","man"];
let sortedArr = arr.sort();
console.log("this is sorted array : " + sortedArr);

let integerArr = [1,45,25,0,65,3]
console.log(integerArr.sort());

//integerArr.sort(function(a,b){
  //  return a-b;
//})

console.log(integerArr.sort((a,b)=>a-b)); // this is use to sort the Integer order
console.log(integerArr.sort((a,b)=>b-a));


