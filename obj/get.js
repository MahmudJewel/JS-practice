const student = {
    // data property
    firstName: 'Monica',
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};
// accessing data property
console.log(student.firstName); // Monica
// accessing getter methods
console.log(student.getName); // Monica
// trying to access as a method
// console.log(student.getName()); // error