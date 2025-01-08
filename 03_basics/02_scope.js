var c=300;
// let a=100; //global scope
if(true){
    let a = 10; //local scope
    const b = 20;
    var c = 30;
    //console.log(a); //10
}

// console.log(a); //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined
//console.log(c); //30


function one(){
    const username="Nitesh";
    function two(){
        const website="www.google.com";
        console.log(username); //Nitesh
    }
    //console.log(website); //ReferenceError: website is not defined because website is defined in two() function not in one() function
    two();
}
//one(); //Nitesh

// console.log(username); //ReferenceError: username is not defined
// console.log(website); //ReferenceError: website is not defined

if(true){
    const username="Nitesh";
    if(username==="Nitesh"){
        const website=" www.google.com";
        //console.log(username+website); //Niteshwww.google.com
    }
    //console.log(website); //ReferenceError: website is not defined
}
//console.log(username); //ReferenceError: username is not defined

// +++++++++++++++++++++ intresting +++++++++++++++++++++

console.log(addone(10)); //11 we can call the function before defining the function
function addone(num){
    return num+1;
}
//console.log(addone(10)); //11


//addtwo(10); //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo=function(num){
    return num+2;
}
addtwo(10); //12
