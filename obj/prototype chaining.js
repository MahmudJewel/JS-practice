function Person() {
    this.name = 'Mahmud'
}
// adding property 
Person.prototype.name = 'Jewel';
Person.prototype.age = 26
const person1 = new Person();
console.log(person1.name); // Mahmud
console.log(person1.age); // 26