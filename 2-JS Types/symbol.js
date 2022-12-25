// const x = Symbol('hei');
// // const x = Symbol('okk'); // error
// console.log(x)  // Symbol(hei)
// console.log(x.description)  // hei

// // symbol are uniques
// // two symbols with the same description
// const value1 = Symbol('hello');
// const value2 = Symbol('hello');
// console.log(value1 === value2); // false


// let id = Symbol("ok");
// let person = {
//   name: "Jack",
//   // adding symbol as a key
//   [id]: 123, // not "id": 123
// };
// console.log(person)  // { name: 'Jack', [Symbol(ok)]: 123 }
// console.log('Name=> ', person.name) // Name=>  Jack
// console.log('id=> ',person[id])  // id=>  123


var a=Symbol('ok')
console.log(a)
