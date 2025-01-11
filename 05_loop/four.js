
const myObject = {
    name: 'john',
    age: 30,
    location: 'USA'
};

// for (const key in myObject) {
//     console.log(key);
// }

const myArray = ['thor', 'ironman', 'captain america', 'black widow', 'hulk', 'hawkeye'];
for (const key in myArray) {
    console.log(key);
} //`key` will be the index of the array not the value of the array.

