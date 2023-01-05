// modified: https://gist.github.com/nicbell/6081098
// Object.compare = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const comp = (a, b) => {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
};

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
console.log('strict equal: ',arr1===arr2) // false
console.log('JSON comp: ',comp(arr1, arr2)); // true
