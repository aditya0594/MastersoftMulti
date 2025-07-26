module.export =class Person{

    age  = 25;
    get location(){  // defining property ,  when you put get before the getter that is treated as a property
        return "canada";
    }
    // constructor is method which execute default when you create object of class 
    constructor(firstname,lastname)  //constructor
    {
      this.firstname = firstname;
      this.lastname = lastname;

    }
    fullname(){  //method
       console.log(this.firstname + this.lastname);
    }
}

let person = new Person("aditya","pawar");
let person1 = new Person("subhash","pawar")

console.log(person.age);
console.log(person.location);
console.log(person.fullname());
console.log(person1.fullname());



