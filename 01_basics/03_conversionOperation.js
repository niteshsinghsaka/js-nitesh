let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber); 
console.log(valueInNumber); 
// "33" => 33
// "33abc" => NaN
// true =>1; false =0

let isLoggedIn=1

let booleanIsloggedIn=Boolean(isLoggedIn)
console.log(isLoggedIn); 

// true =>1; false =0
// "" =>false
// "Nitesh" => true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*******operations******** */
let value=3
let negvalue=-value
console.log(negvalue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);*/

let str1="Hello"
let str2="Nitesh"
let str3=str1+str2
console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(+true);
// console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log(gameCounter);