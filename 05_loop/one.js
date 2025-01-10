// for loop
// print 1 to 10

// for (let i = 1; i <=10; i++) {
//     console.log(i);
// }

// print 10 to 1

// for(i=10;i>=1;i--){
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (i == 7) {
//         console.log("No. 7 Thala for a reason");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner loop ${j} and outer loop ${i}`);
//     }
// }

// table of 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of 5 = ${i * 5}`);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

let myArray=['thor','ironman','captain america','black widow','hulk','hawkeye'];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// break statement and continue statement

for (let i=0;i<=20;i++){
    if (i==5){
        console.log('detected 5');
        break;
    }
    console.log(`value of i is ${i}`);

}
for (let i=0;i<=20;i++){
    if (i==5){
        console.log('detected 5');
        continue;
    }
    console.log(`value of i is ${i}`);

}
