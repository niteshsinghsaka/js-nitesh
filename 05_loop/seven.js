const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNum = myNumbers.map((num) => num * 2);
// console.log(newNum); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const newNums= myNumbers
                .map((num) => num * 10)
                .map((num) => num + 2)
                .filter((num) => num % 3 == 0)
console.log(newNums)