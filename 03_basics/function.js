// syntax of function
// function nameOfTheFunction(parameters){
//   code 
//  return      
// }



function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
    
}
// addTwoNumbers(2,4)

let ans = addTwoNumbers(2,3)

console.log(ans);

// we are not calling the ans so use return




function addTwoNumbers(number1, number2) {
    const result= number1 + number2
    return result
}


function addTwoNumbers(number1, number2){
    return number1 + number2
    // nothing can print after return
}
// addTwoNumbers()            this is how we call the function

let resutl = addTwoNumbers(2,3)
// console.log(addTwoNumbers(2,3));
console.log(`result is ${resutl}`);



function isUserLoggedIn(username) {
    return `${username} has logged in`
}


console.log(isUserLoggedIn("animesh"));
// const print = isUserLoggedIn("animesh")
// console.log(print);

// important when u hasnot passed any value then it will show undefined eg : isUserLoggedIn() so it will print undefined
// lets write code when the user is giving undefined things

function isUserLoggedIntwo(username) {
    if (!username) {                    // otherwise user username === username
        console.log("please enter a username");
        return                // return so that code execution stopped here
    }
    return "${username} has logged in "
    
}

console.log(isUserLoggedIntwo());


// we can also avoid if situation by giving a default value to it 

function isUserLoggedInthree(username = "kakoty") {
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} has logged in just now`
}

console.log(isUserLoggedInthree("animesh"));