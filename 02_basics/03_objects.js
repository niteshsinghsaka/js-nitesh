// singleton object - object with single property
// object literal
const mySymbol = Symbol('key1');
const JsUser = {
    name: 'Nitesh',
    age: 25,
    isActive: true,
// mySymbol:"key1", // this will be treated as string
    [mySymbol]:"key1", // this will be treated as symbol
    location: 'India',
    email:'nitesh@google.com',
    lastLoginDays:['monday','tuesday','wednesday'],
    "full name": 'Nitesh Singh'
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
//console.log(JsUser."full name"); // this will throw an error
// console.log(JsUser["full name"]);
// console.log(JsUser["mySymbol"]); // this will be treated as string
// console.log(JsUser[mySymbol]);

JsUser.email="niteshsingh@gmail.com"
// console.log(JsUser.email);
//Object.freeze(JsUser); // freeze the object
JsUser.email="niteshsingh@microsoft.com"
// console.log(JsUser.email); // this will not change the value

JsUser.greetings = function(){
    console.log("Hello, js User");
}
//console.log(JsUser.greetings); // this will return the value of the greetings
console.log(JsUser.greetings()); // this will return the function

JsUser.greetings2= function(){
    console.log(`Hello, I am ${this.name}`);
}
console.log(JsUser.greetings2()); // this will return the function