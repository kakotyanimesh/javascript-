// let a = 10
// const b = 20
// var c = 30

// why using var 


// {}  this are scopes when it use with function and if else and values outside the scope i,e outside the {} are known as global 


if (true){
    let a = 10
    const b = 20
    var c = 30

}
 // here we can print var outside the {} but not the let and const value so we can access var outside the {} 
//  and if we add var d = 30 and if (){var d = 69}
//   then while printing d the value changes to d 

// console.log(a);
// console.log(b);
console.log(c);



// nested scope 

function one() {
    const username = " animesh"

    function two() {
        const website = "REMOTE JOB "

        console.log(username);
        console.log(website);
    }
    // console.log(website);           // here code won't run because we are calling website outside the scope 
                                    // we can call username as its inside the parent function but parent function cant cal from its inside 

    two()

}

one()

// console.log(username);  // this thing also wont run 


if (true) {
    const username = "animesh"

    if (username === "animesh") {
        const need  = " want a remote job by end of this year and an internship by april to july !"

        console.log(username + need);

    }
    // console.log(need);     this line wont execute as out of scope 
}


// console.log(website);      also won't execute as it out of scope!!






// let's discuss two types of function declaration 

console.log(addOne(1));          // in this type we can call the function before its diclaration but not in the next case 

function addOne(num) {
    return num + 1
    
}

// console.log(addTwo(1));                // here we cant call the before its diclaration we have to do it after its being diclared !
const addTwo = function addTwo(num) {
    return num + 2
}

console.log(addTwo(1));
                  
