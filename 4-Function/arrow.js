// Arrow as expressions
// let age = 5;
// let welcome = (age < 18) ?
//   () => console.log('Baby') :
//   () => console.log('Adult');
// welcome(); // Baby

// arrow binding
// let x = function () {
//   console.log(arguments);
// };
// x(4, 6, 7); // Arguments [4, 6, 7]

// // let x = () => {    // error
// //   console.log(arguments);
// // };
// let x = (...n) => {  // ok
//   console.log(n);
// };
// x(4, 6, 7); // [ 4, 6, 7 ]

let Foo = () => {};
let foo = new Foo(); 
console.log(foo) // TypeError: Foo is not a constructor
