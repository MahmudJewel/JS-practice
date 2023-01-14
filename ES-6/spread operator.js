// // 01
// const arrValue = ["My", "name", "is", "Jack"];
// console.log(arrValue); // ["My", "name", "is", "Jack"]
// console.log(...arrValue); // My name is Jack

// // 02 ==> Copy Array Using Spread Operator
// const arr1 = ["one", "two"];
// const arr2 = [...arr1, "three", "four", "five"];
// console.log(arr2); //  ["one", "two", "three", "four", "five"]

// //03=> Clone Array Using Spread Operator
// let arr1 = [1, 2, 3];
// // copy using spread syntax
// let arr2 = [...arr1];
// console.log(arr1); // [1, 2, 3]
// console.log(arr2); // [1, 2, 3]
// // append an item to the array
// arr1.push(4);
// console.log(arr1); // [1, 2, 3, 4]
// console.log(arr2); // [1, 2, 3]

// // 04 -> Spread Operator with Object
// const obj1 = { x: 1, y: 2 };
// const obj2 = { z: 3 };
// // add members obj1 and obj2  to obj3
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // {x: 1, y: 2, z: 3}

// //05 -> Rest Parameter
// let func = function (...args) {
//   console.log(args);
// };
// func(3); // [3]
// func(4, 5, 6); // [4, 5, 6]

// 05-2->
function sum(x, y, z) {
  console.log(x + y + z);
}
const num1 = [1, 3, 4, 5];
sum(...num1); // 8
