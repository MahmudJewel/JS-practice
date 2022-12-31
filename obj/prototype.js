// constructor function
function Person() {
    this.name = 'Mahmud',
    this.age = 23
}
// creating objects
const person1 = new Person();
const person2 = new Person();
// adding property to constructor function
Person.prototype.gender = 'male';
// prototype value of Person
console.log(Person.prototype);  // { gender: 'male' }
// inheriting the property from prototype
console.log(person1.gender); // male
console.log(person2.gender); // male