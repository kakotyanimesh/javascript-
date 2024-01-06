// singlrton and object literals

// here we discuss objects literals

// symbol define and print it 
const mySym = Symbol("koty")

const JsUser = {
    name: "animesh",
    age: 20,
    [mySym]: "ak",
    "full name": "animesh kakoty",
    email: "animeshkakoty33@gmail.com",
    lastLogIn: ["monday", "tuesday"],
    isLoggedIn: true,
}

// lets acess the objects : two ways but use the first one

// JsUser["name"]
// JsUser.email      (dont use this )

console.log(JsUser["name"]);
console.log(JsUser.name);    // not the right way 

console.log(JsUser["full name"]);
// console.log(JsUser.full name ); this is why use the [""] 

console.log(JsUser[mySym]);



// chnage value in objects 
JsUser.name = "kakoty-animesh"

// freeze the change 
// Object.freeze(JsUser)       // syntax is Object.freeze(name of the object)

JsUser.email = "kakotyanimesh07@gmail.com"

console.log(JsUser);


// lets add function inside a object

JsUser.greetings = function () {
    console.log("hellow ");
}

JsUser.greetingsTwo = function () {
    console.log(`hellow your email is, ${this.email}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());









// this is how we print something 
console.log(`${JsUser["full name"]}, your email add is ${JsUser["email"]} and your age is ${JsUser["age"]}`);