//Question 3 : Write a “person” class to hold all the details.

class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("Jai", "Singh", "02-06-1995" , "Uttar-Pradesh");
var person2 = new Person("Swetha", "Kumari", "01-01-1998" , "Punjab");
var person3 = new Person("Vikram", "Rajput", "09-10-1996" , "Rajasthan");
var person4 = new Person("Omprakash", "Mourya", "14-11-2000" , "Mumbai");
var person5 = new Person("Dipti", "Pandit", "08-07-1999" , "Masoori");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are "person1" : ${person1.firstname}`)
console.log(`All the Person Names are "person2" : ${person2.firstname}`)
console.log(`All the Person Names are "person3" : ${person3.firstname}`)
console.log(`All the Person Names are "person4" : ${person4.firstname}`)
console.log(`All the Person Names are "person5" : ${person5.firstname}`)