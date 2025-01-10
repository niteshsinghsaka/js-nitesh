
const user={
    username:"Nitesh",
    age:25,
    welcomeMesssage:function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMesssage(); //Nitesh,Welcome to website
// user.username="Nitesh Singh";
// user.welcomeMesssage(); //Nitesh Singh,Welcome to website
//console.log(this);

// function chai(){
//     let username="Nitesh";
//     console.log(this.username); //undefined because this is window object not user object
// }
// chai(); //window object

const chai=()=>{
        let username="Nitesh";
         console.log(this);
}
//chai(); //undefined because this is window object not user object

//explicit return

// const addTwo=(a,b)=>{
//     return a+b;
// }
//console.log(addTwo(2,3)); //5

//implicit return
//const addTwo=(a,b)=> a+b; //if only one statement then no need to write return statement

//const addTwo=(a,b)=> (a+b); 
const addTwo=(a,b)=> ({username:"Nitesh",age:a+b}); 
console.log(addTwo(2,3)); 


const edu=() => {
    console.log('I am a third function');
};
edu(); //I am a third function

const world= (name)=>{
    console.log(`my name is ${name}`);
}
world('nitesh'); //my name is nitesh