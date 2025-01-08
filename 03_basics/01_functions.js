function sayMyName() {
  console.log("N");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
//sayMyName(); //call the function

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(5, 10); //15

function addTwoNumbers(number1, number2) {
  // let add=number1 + number2
  // return add;
  return number1 + number2;
}
const result=addTwoNumbers(5, 10);
// console.log("Result : ",result); //15

// function loginUserMessage(username) {
//   return `${username} is logged in`;
// }
// console.log(loginUserMessage("Nitesh")); //Nitesh is logged in
// console.log(loginUserMessage("")); 
// function loginUserMessage(username) {
//   if (!username) {   //if(!username) is same as if(username === "")
//     return "Please provide a username";
//   }
//   return `${username} is logged in`;
// }
// console.log(loginUserMessage("")); 
// console.log(loginUserMessage("Nitesh")); //Nitesh is logged in

function loginUserMessage(username="Nitesh") { //default value
  return `${username} is logged in`;
}
// console.log(loginUserMessage()); //Nitesh is logged in

// function calculateCartPrice(...num1) { //rest operator 
//   return num1;
// }
// console.log(calculateCartPrice(100,200,400)); //[100,200,400] 

function calculateCartPrice(value1,value2,...num1) { //rest operator 
  return num1;
}
console.log(calculateCartPrice(100,200,400,600)); //[400,600] because value1=100 and value2=200 and rest of the values are stored in num1

const user={
  username:"Nitesh",
  age:25,
}
function getUserDetails(anyObject) {
  console.log(`Username is : ${anyObject.username} and age is : ${anyObject.age}`);
}
//getUserDetails(user); //Username is : Nitesh and age is : 25
getUserDetails({username:"Nitesh",age:25}); //Username is : Nitesh and age is : 25

const myNewArray=[100,200,300,400,500];
function returnSecondElement(getarray) {
  return getarray[1];
}
//console.log(returnSecondElement(myNewArray)); //200
console.log(returnSecondElement([100,200,300,400])); //200