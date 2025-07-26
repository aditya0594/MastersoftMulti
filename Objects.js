// object is the collection of properties 
// here properties can be defined in keyvalue pair 

let person ={     //here person is a object and fiestname ,lastname is properties of the object

    firstName : 'Tim',
    lastName :'joe',
    age : 30,
    fullname : function(){
        console.log(this.firstName+this.lastName);
    }


}

console.log(person.fullname());
console.log(person.lastName);
console.log(person['lastName']); // another way in the way of array 

person.lastName = 'pawar'; //update the propertie value 
console.log(person.lastName);

person.gender = "male";  // it will create the property in the object 

console.log(person);

delete person.gender;  // To delete the created properties in the object

console.log(person);


console.log("-------------it the properties exit or not ------------")

console.log('gender' in person);

console.log("-------------To print all the value of javascript object ------------")

for(let key in person){
    console.log(person[key]);
}






 