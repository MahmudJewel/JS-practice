const list = [1, 2, 3];
list.push(4); // adds on last
list.unshift("Zero"); // adds on first
list[10] = 10; // added at 10
console.info(list); // [ 'Zero', 1, 2, 3, 4, <5 empty items>, 10 ]
