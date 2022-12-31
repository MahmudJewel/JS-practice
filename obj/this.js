// const person = {
//     name: 'Mahmud',
//     age: 30,

//     // accessing name property by using this.name
//     greet: function() { console.log('The name is' + ' ' + this.name); }
// };
// person.greet(); // The name is Mahmud

const person = {
  name: "Mahmud",
  age: 30,
  greet: function () {
    let surname = "Jewel";
    console.log("The name is" + " " + this.name + " " + surname);
  },
};
person.greet(); // The name is Mahmud Jewel
