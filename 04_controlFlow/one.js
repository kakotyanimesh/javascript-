// if else 

// if (condition) {
    // if the condition is true then code will execute inside the scope 
    // if the condition is false then code wont run 
// }


// >, <, >=, <=, =, == (check value ), === (checked datatypes), != , !===


const temperature = 51 

if (temperature > 50) {
    console.log(`temperature is greater then 50`);
} else{
    console.log(`temperature is less then 50 and its value is ${temperature}`);
}



const balance = 5000

if (balance > 3000) console.log(`way to write if without scope, but should be written in one line`);  // not recommended 


// if (condition) {
    
// } else if (condition) {
//     // multiple if else statement

// } else {

// }

const userLoggedIn = true
const debitCard = true
const loggedInViaEmail = false
const loggedInViaGoogle = true

if (userLoggedIn && debitCard) {
    console.log(`both condition should be corrected so use &&`);

}
if (loggedInViaEmail || loggedInViaGoogle) {           
    console.log(`only one statement is true so we use ||`);
    
}
