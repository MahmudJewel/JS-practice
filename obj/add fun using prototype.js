// constructor function
function Person () {
    this.name = 'Mahmud',
    this.age = 23
}
// creating objects
const person1 = new Person();
const person2 = new Person();
// adding a method to the constructor function
Person.prototype.greet = function() {
    console.log('hello' + ' ' +  this.name);
}
person1.greet(); // hello Mahmud
person2.greet(); // hello Mahmud