const coding=['js','html','css','react','node'];

// coding.forEach(function (item){
//     console.log(item);
// })


// coding.forEach((item)=>{
//     console.log(item);
// })

function printme(item){
    console.log(item);
}   

// coding.forEach(printme);

// coding.forEach((item,index,arr)=>{ //arr is the array itself
//     console.log(item,index,arr);
//     })

const mycoding=[{
    name:'js',level:5},
    {name:'html',level:4},
    {name:'css',level:3}];

mycoding.forEach((item)=>{
    console.log(item.name,item.level);
})
