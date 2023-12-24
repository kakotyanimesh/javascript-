
// JavaScript id dynamically typed language {important}

// data is divided into two parts based on how to store them in memory and access them 
     // #Primitive and #Nonprimitives

// 7 types of Primitives datatypes
    // String, Number , Boolean , null , undefined , Symbol, BigInt 


//examples

const score = 100 //number
const scoreValue = 100.3 //decimal

const isLoggedIn = true //Boolean
const inTempr = null 
let userEmail; //undefined

const id = Symbol(123)
const anotherId = Symbol(123)

console.log(id == anotherId); // both are different as they are inside the symbol
console.log(id);
console.log(anotherId);




//Reference type or NonPrimitives ( references in memory)
       // Arrays, Objects, Functions   
       //the typeOf operator result of Nonprimitives dataypes is functions


// the typeOf operator result list

            // Undefined => "undefinied"
            // Null => "object"
            // Boolean => "boolean"
            // Number => "number"
            // String => "string"
            // object => "object"

const heros = ["SHAKTIMAN", "IRONMAN"] //Arrays 


let myObject = {
    name: "animesh",      //object 
    age : 21,
}


const myFunction = function () {
    console.log("this is Animesh");
}