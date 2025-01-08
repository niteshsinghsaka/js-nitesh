//const tinderUser = new Object(); singletons object

const tinderUser = {}
tinderUser.name = 'Nitesh';
tinderUser.age = 25;
tinderUser.isActive = true;

//console.log(tinderUser);

const regularUser = {
    email:'some@gmail.com',
    fullname:{
        userFullName:{
            firstName:'Nitesh',
            lastName:'Singh'
        }
    }
}

//console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:'Nitesh',2:'Singh'};
const obj2 = {3:'Nitesh',4:'Singh'};
//const obj3 = {obj1,obj2}; // merge two objects 

// const obj3=Object.assign({},obj1,obj2); // merge two objects
const obj3={...obj1,...obj2}; // merge two objects using spread operator
//console.log(obj3);

const users=[
    {
    id:1,
    email:"a@gmail.com"
    },
    {
    id:2,
    email:"b@gmail.com"
    },
    {
    id:3,
    email:"c@gmail.com"
    }
]
users[1].email
//console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.keys(tinderUser).length);
// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.keys(regularUser).length);

// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isActive'));

// destructuring objects

const course={
    coursename:'React',
    price:1000,
    courseInstuctor:'Nitesh'
}
// console.log(course.courseInstuctor);
const {courseInstuctor:Instuctor}=course;
console.log(Instuctor);

// {
//     "name":"Nitesh",
//     "coursename":"React",
//     "price":1000,
// }

[
    {}
    {}
    {}
]