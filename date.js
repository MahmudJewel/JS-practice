// // 1: date
// const timeNow = new Date();
// console.log(timeNow); // shows current date and time

// // 2: new date 
// const time1 = new Date(0);
// // epoch time
// console.log(time1); // Thu Jan 01 1970 05:30:00
// // 100000000000 milliseconds after the epoch time
// const time2 = new Date(100000000000);
// console.log(time2); // Sat Mar 03 1973 15:16:40

// 2
// ISO Date(International Standard)
const date = new Date("2020-07-01");
// the result date will be according to UTC
console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545