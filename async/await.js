// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise resolved");
  }, 2000);
});
// async function
async function asyncFunc() {
  // wait until the promise resolves
  let result = await promise;
  console.log(result);
  console.log("hello");
}
// calling the async function
asyncFunc();