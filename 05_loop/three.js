// for of

const arr = [1, 2, 3, 4, 5];

// for (const value of arr) {
//     console.log(value);
// }

const heroes = ['thor', 'ironman', 'captain america', 'black widow', 'hulk', 'hawkeye'];

// for (const hero of heroes) {
//     console.log(hero);
// }

// Maps 

const myMap = new Map(); 
myMap.set('name', 'john');
myMap.set('age', 30);
myMap.set('location', 'USA');
// console.log(myMap);

// for (const [key, value] of myMap) {
//     console.log(key, value);
// }

for (const key in myMap) {
   console.log(key);
} // it will not work for maps.