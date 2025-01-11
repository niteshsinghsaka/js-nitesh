const coding=['js','html','css','react','node'];

const values = coding.forEach((item)=>{
    //console.log(item);
    return item;
})

// console.log(values); //undefined

const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNum.filter((num) => num > 5) //filter is used to filter out the elements of an array that do not meet the specified condition
// console.log(newNums); //[6, 7, 8, 9, 10]

// const myEven =myNum.filter((num)=>num%2==0)

// console.log(myEven); //[2, 4, 6, 8, 10]

// const myArr=[];
// myNum.forEach((num)=>{
//     if(num>4){
//         myArr.push(num);
//     }
// })

// console.log(myArr); //[5, 6, 7, 8, 9, 10]

const books = [
 {title:"Js",genre:"Programming",price:400},
 {title:"The Seven Habits",genre:"Self-help",price:300},
 {title:"The King",genre:"Fiction",price:200},
 {title:"India",genre:"History",price:100},
 {title:"React",genre:"Programming",price:700}
 ]
 //const myBooks=books.filter((book)=>book.genre=="Programming")
//const myBooks=books.filter((book)=>book.price>400)

const userBooks=books.filter((book)=>{return book.price>=200 && book.genre=="Programming"})
console.log(userBooks); 