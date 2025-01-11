  const myNumbers=[1,2,3,4];

//   const myTotal= myNumbers.reduce(function (acc, curval){
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval;
//   }, 0)

const myTotal = myNumbers.reduce((acc, curval)=> acc + curval,0)

  console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js Course",
        price:5999
    },
    {
        itemName:"Py Course",
        price:7999
    },
    {
        itemName:"data science Course",
        price:12999
    }
]

const addCartValue=shoppingCart.reduce((acc,item)=> acc + item.price,0)

console.log(addCartValue);