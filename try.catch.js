const numerator= 100, denominator = 'a';
try {
     console.log('try1: ',numerator/denominator);
     console.log('try =',a); // will go on catch
}
catch(error) {
    console.log('Error');
    console.log('Error message: ' + error);
}
finally {
     console.log('Finally will execute every time');
}

// a=10
// var a 
// console.log(a)
