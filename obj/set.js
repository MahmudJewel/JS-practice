const student = {
    firstName: 'Monica',
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};
console.log(student.firstName); // Monica
// change(set) object property using a setter
student.changeName = 'Sarah';
console.log(student.firstName); // Sarah