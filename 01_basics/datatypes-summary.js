// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.5

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherid= Symbol(123)
//console.log(id === anotherid);

const bigNumber = 345344556766756566456878543n

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["Shakiman","Nagraj","Doga"]

let  student={name:"Nitesh",couse:"JavaScript",age:25}

const myfunction = function(){
    console.log("Hello World");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename="niteshsingh"
let anothername=myYoutubename
anothername="niteshcreation"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="nitesh@google.com"

console.log(userOne);
console.log(userTwo);