// immediately invoked function expression {iife}

// global scope kei pollution sei bachne ke liye iife use kiya 
// and for imediate execution 
//          syntax : ()() 

(function (){
    console.log(`iife execution`);
})();

(function namedIifee(){
    // its a named iife
    console.log(`named iife execution `);
})();

// dont forget to put ; to end the iife 

(() => {
    console.log(`iife execution in arrow funtion`);
})();     // dont forget to end 


((name) => {
    console.log(`iife execution object ${name}`);
})('anieh')






