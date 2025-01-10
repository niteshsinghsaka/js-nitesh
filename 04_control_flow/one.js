// if condition

// if (true) {
//     console.log('This will always run');
// }
// let age = 20;
// if (20>=18){
//     console.log("You are eligible to vote");
// }

 //const balance = 500;
// if (balance >= 100) console.log('more than 100'), console.log('greater than 100');//dont use this because it is bad way of writing code

// if (balance<500) {
//     console.log('less than 500');
// }else if (balance <700) {
//     console.log('less than 700');
// }
// else if (balance <1000) {
//     console.log('less than 1000');
// }
// else {
//     console.log('greater than 1000');
// }

const userloggedin = true;
const debitCard = true;
const loggedInFromGoogle = false;
const userloggedinFromEmail = true;

if (userloggedin && debitCard) {
    console.log('You can purchase');
}

if (userloggedin || loggedInFromGoogle) {
    console.log('User logged in');
}