const userEmail='n@itesh.ai';

if(userEmail){
    console.log('Got the email');
}else{
    console.log('Dont have user email');
}

// falsy values

// false,0, -0,'',"",null,undefined,NaN,BigInt(0n),Symbol('')

// truthy values
// "0", "false", " " ,{}, [], function(){},"true",true,1n,Symbol('true')
// const user =[];
// if (user.length === 0){
//     console.log('Array is empty');
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0){
    console.log('Object is empty');
}

//Nullish coalescing operator (??): null and undefined

let val1;
//val1 =5 ?? 10; // if val1 is null or undefined then it will take 10
//val1 = null ?? 10; // if val1 is null or undefined then it will take 10
//val1 = undefined ?? 10; // if val1 is null or undefined then it will take 10
val1 = null ?? 10 ?? 20; // if val1 is null or undefined then it will take 10
console.log(val1);

// ternary operator

//condition ? true : false;
const iceTeaPrice = 100;
iceTeaPrice < 80 ? console.log('I will buy ice tea') : console.log('I will not buy ice tea');

