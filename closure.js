function sum() {
  let a = 0;
  function increaseSum() {
    // the value of a is increased by 1
    return (a = a + 1);
  }
  return increaseSum;
}
let x = sum();
let a = 123;
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
console.log(x()); // 4
console.log(a); // 123
