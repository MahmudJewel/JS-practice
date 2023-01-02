// //Syntax
// let promise = new Promise(function (resolve, reject) {
//   //do something
//   if (count) {
//     resolve("...");
//   } else {
//     reject("...");
//   }
// });

const count = true;
let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});
console.log(countValue);

