// function nameOfFunction (p1,p2,...) {
//     // function body
// }

// function add(nm1, nm2, nm3){
//     return nm1+nm2+nm3
// }
// console.info(add(1,2,4))

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const obj = new Person('Jahid','Mahmud', 12, 'Black');
Person.prototype.country = 'Bangladesh'; // prototype==> for all object.
console.info('Obj ==> ',obj)
console.info('==> ', obj.country)






