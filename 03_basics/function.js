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

// lets study about function in shopping carty



function addtOcart(...num) {
    return num
}

console.log(addtOcart(200, 4999, 6999));   // it will return an array because we are using ... to add more items 


// pass object to an function 

const userNew = {
    username2: "animesh",
    age: 20
}

function handleObject(anyobject) {
    return `username is ${anyobject.username2} and age is ${anyobject.age}`
}

console.log(handleObject(userNew));

// we call function with syntax : name_of_functionn(the_callout-parameter)

function handleObjectPttwo(anyobjecttwo) {
    return `${anyobjecttwo.name} has fucked up his ${anyobjecttwo.year} year of his ${anyobjecttwo.totalyear} year college life`
}

console.log(
    handleObjectPttwo({
        name: "animesh",
        year: 2.5,                            // giving values at last 
        totalyear: 4
    })
    );
                  




// let's do the same thing with arrays 

const myNewArray = [200, 300, 6969696, 5000]

function handleArray(anyArray) {
    return anyArray[3]
}

console.log(handleArray(myNewArray));

console.log(handleArray([200, 300, 4000, 50000]));