// printing of table till 10 from 0 

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

let myArray = ["animesh", "kakoty", "saikia"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}


// break and continue 

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`dected 5`);
//         break                    // to break control flow , written 
//     }
//     console.log(`value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`dected 5`);
        continue                    // to break control flow , written 
    }
    console.log(`value of i is ${index}`);
    
}