let value = 3

let negvalue = -value

console.log(negvalue);



// //basic operations 

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);



let str1 = "animesh"

let str3 = " kakoty"

console.log(str1 + str3);

// operations where js thinks

console.log("1" + 2);  // ==> 12  as Here js takes both of them as string

console.log(1 + 2); // ==> 3 as Here js takes both of them as number

console.log("1" + 2 + 2); // ==> 122 as Here js takes eberything as string and placed side by side


console.log(1 + 2 + "2"); // ==>32 as Here js takes string as string and number as number 


console.log((3 + 4) * 5 % 3);


let gameCounter = 100
++gameCounter;
console.log(gameCounter);