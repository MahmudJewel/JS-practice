// constructor function
function Person() {
    this.name = 'Mahmud'
}
// add a property
Person.prototype.age = 20;
// creating an object
const person1 = new Person();
console.log(person1.age); // 20
// changing the property value of prototype
Person.prototype = { age: 26 }
// creating new object
const person3 = new Person();
console.log(person3.age); // 26
console.log(person1.age); // 20