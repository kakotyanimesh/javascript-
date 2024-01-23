const user = {
    username : "animesh",
    price : 699,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website`);  // this. is for corrent context
        console.log(this);

    }


}

user.welcomeMessage()        // the last () is needed to run a method 

user.username = "kakoty"   // here we change the name 
user.welcomeMessage()      // as we written this. so username changes here


console.log(this);


function thisInsideFnc() {
    let username = "animesh"
    console.log(this);       // this will print something big 
    console.log(this.username)
}

thisInsideFnc()  // it will give undefined as we cannot use this inside function


const chai = function () {
    let username = "dick"
    console.log(this.username);       // here also we get undefined
}

chai()

// arrow function

const chai2 = () => {
    let username = "dicll"
    console.log(this);             // this will give empty object
    console.log(this.username);     
}

chai2()


const syntaxOfArrowFunction = () => { 

}

const addTwo = (num1, num2) => {
    return num1 + num2
}

const ans = addTwo(2, 3)
console.log(ans);

const addThree = (num1, num2) => (num1 + num2)          // return shouldnot write here as it is under ()

const ansTwo = addThree(2, 3)
console.log(ansTwo);

const addtheree = (num1, num2) => num1 + num2         // also we dont need ( ) as it written in the same line 

const ansthre = addtheree(2, 3)
console.log(ansthre);

// object retun in arrow function

const objectReturn = () => ({username: "animesh"})

console.log(objectReturn());