//arrays
const myArr1=[1,2,3,4,5];

const myHero=['ironman','captain','thor','spiderman','blackwidow'];
// console.log(myHero[0]);

const myArr2=new Array(1,2,3,4,5);
// console.log(myArr2[3]);

//Array Methods
// myArr1.push(6); // add element at the end of the array
// myArr1.pop(); // remove element from the end of the array

// myArr1.unshift(9); // add element at the start of the array
//myArr1.shift(); // remove element from the start of the array

//console.log(myArr1.includes(9)); // check if the element is present in the array
 //console.log(myArr1.indexOf(3)); // return the index of the element

const newArr = myArr1.join() // convert array to string
// console.log(myArr1);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

console.log("A",myArr1);

const myn1=myArr1.slice(1,3); // slice(start,end) - end is exclusive
console.log(myn1)
console.log("B",myArr1);

const myn2=myArr1.splice(1,3); // splice(start,deleteCount) - deleteCount is optional
console.log(myn2)
console.log("C",myArr1);