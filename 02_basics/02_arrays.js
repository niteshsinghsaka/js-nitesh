const marvelHeroes = ['thor', 'ironman', 'captain'];
const dcHeroes = ['batman', 'superman', 'wonderwoman'];
const indiaHeroes = ['shaktiman', 'nagraj', 'supercommando'];

//marvelHeroes.push(dcHeroes); // push an array to another array

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]); // access the element of the pushed array

const myHero= marvelHeroes.concat(dcHeroes); // merge two arrays
// console.log(myHero);
// console.log(myHero[3]);

const myHero1 = [...marvelHeroes, ...dcHeroes,...indiaHeroes]; // merge multi arrays using spread operator
// console.log(myHero1);

const anotherArr=[1,2,3,[4,5,6],7,[8,9,[10,11]]];
// console.log(anotherArr[5][2][1]); // access the element of the nested array
const flatArr = anotherArr.flat(2); // flat(depth) - depth is optional
//console.log(flatArr);

console.log(Array.isArray('Nitesh')); // check if the variable is an array
console.log(Array.from('Nitesh')); // convert string to array of characters (intresting)
console.log(Array.from({name:"Nitesh"})); // convert object to array of object keys

let score1=100;
let score2=200;
let score3=300;

const scores = Array.of(score1,score2,score3); // create an array of elements
console.log(scores);