let day = "Saturday "
console.log(day.length); //9 
let subday = day.slice(0,4);
console.log(subday);
console.log(day[1]);
//Sat rday
let daySplit = day.split("u");


console.log(daySplit);
console.log(daySplit[1].length);
console.log(daySplit[1].trim().length);

console.log("-----------Integer to String -------------");

let days = 12;
let nextDay = 15;
let diff = parseInt(nextDay) - parseInt(days);
console.log(diff);


console.log("-----------ConCat String -------------");
let concatString = day + "is funday"
console.log(concatString);

console.log("-----------Index of  -------------");
let val = concatString.indexOf("day",7);
console.log(val);


console.log("-----------how many time day in sentence -------------");
let val1 = concatString.indexOf("day");  // if the day not found then the output will be the -1
let count = 0;
while(val1!==-1){
 count++;
 val1 = concatString.indexOf("day",val1+1);
}
console.log(count);








