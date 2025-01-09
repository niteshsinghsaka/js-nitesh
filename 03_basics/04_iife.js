// immediately invoked function expression (IIFE)

(function chai() {
    //named iife
  console.log('I am a function');
})(); //ii is called immediately
//chai(); //I am a function
// gllobal scope pollution is avoided

((name) => {
    // unnamed iife
    console.log(`I am a second function ${name}`);
})('Nitesh');



