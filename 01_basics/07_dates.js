// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2025,0,2,5,47);
// console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date("2025-01-02 21:47:00");
// console.log(myCreatedDate2.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

console.log(newDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
console.log(newDate.toLocaleString('default', { weekday: 'long' ,timeZone: 'Asia/Kolkata'}));