// //01
// const name = "Jack";
// console.log(`Hello ${name}!`); // template string

// //02
// // previous ==>
// const str1 = 'A "quote" inside a string';
// const str2 = "Another 'quote' inside a string";
// const str3 = 'A \'quote\' inside a string';
// // ES-6
// const str4 = `This is a string with a 'quote' in it`;

//03
function tagExample(strings) {
  return strings;
}
// creating tagged template
const result = tagExample`Hello Jack`;
console.log(result);
