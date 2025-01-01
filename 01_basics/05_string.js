const name="nitesh"
const repoCount=50
//console.log(name + repoCount + " Value");
console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);
// string manipuation

const gameName= new String("nitesh-ns")
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf("t"));
const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-8,4)
console.log(anotherString);
const newStringOne=" nitesh "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://nitesh.com/nitesh%20singh"
console.log(url.replace("%20","-"));
console.log(url.includes("edu"));