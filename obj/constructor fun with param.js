// constructor function
function Person(person_name, person_age, person_gender) {
  // assigning  parameter values to the calling object
  (this.name = person_name),
    (this.age = person_age),
    (this.gender = person_gender),
    (this.greet = function () {
      return "Hi" + " " + this.name;
    });
}
// creating objects
const person1 = new Person("Mahmud", 25, "male");
const person2 = new Person("Jannat", 15, "female");
// accessing properties
console.log(person1.name); // "Mahmud"
console.log(person2.name); // "Jannat"
