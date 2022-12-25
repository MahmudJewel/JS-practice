// var tester = "hey hi";

// function newFunction() {
//     var hello = "hello";
// }
// console.log(hello); // error: hello is not defined

function run() {
  var foo = "Foo";
  let bar = "Bar";
  var temp_var = "var..."; 
  let temp_let = "let..."; 
  console.log(foo, bar); // Foo Bar
  {
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz); // Mooo Bazz
    var temp_var = "var modified ...";
    let temp_let = "let modified...";
  }

  console.log(moo); // Mooo
  // console.log(baz); // ReferenceError
  console.log("var ==> ", temp_var); // var ==>  var modified ...
  console.log("let ==> ", temp_let); // let...
}
run();
