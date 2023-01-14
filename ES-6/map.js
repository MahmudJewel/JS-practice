// // 01-creating map
// const map1 = new Map(); // an empty map
// console.log(map1); // Map {}

// // 02-Insert Item to Map
// // create a set
// let map1 = new Map();
// // insert key-value pair
// map1.set("info", { name: "Jack", age: 26 });
// console.log(map1); // Map(1) {"info" => {name: "Jack", age: 26}}

// // 03-Access Map Elements
// let map1 = new Map();
// map1.set("info", { name: "Jack", age: "26" });
// // access the elements of a Map
// console.log(map1.get("info")); // {name: "Jack", age: "26"}

// // 04-Check Map Elements
// const set1 = new Set([1, 2, 3]);
// let map1 = new Map();
// map1.set("info", { name: "Jack", age: "26" });
// // check if an element is in Set
// console.log(map1.has("info")); // true

// // 05-> Removing Elements
// let map1 = new Map();
// map1.set("info", { name: "Jack", age: "26" });
// // removing a particular element
// map1.delete("address"); // false
// console.log(map1); // Map {"info" => {name: "Jack", age: "26"}}
// map1.delete("info"); // true
// console.log(map1); // Map {}

// // 06-Map size
// let map1 = new Map();
// map1.set("info", { name: "Jack", age: "26" });
// console.log(map1.size); // 1

// 07-iterate through Map
let map1 = new Map();
map1.set("name", "Jack");
map1.set("age", "27");
// looping through Map
for (let [key, value] of map1) {
  console.log(key + "- " + value);
}
