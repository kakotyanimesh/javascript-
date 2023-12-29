// // global object that used to store data 

           // WE STORE DATA IN ARRAYS  




// // index start from zero 
// // in JS arrays makes shallow copies { In sc : changes are made in original copies that is share same reference point  }
// //                    Deap copy { in deep copy changes are not happen in original file that is no share of same reference point }\

// //


const myArr = [0, 1, 2, 3]
// const myHeros = ["animesh", " kakoty" ]


// const myArr2= new Array(1, 2, 3, 4, 5, 6)
// console.log(myArr[0]);   // check brackets 


// //methods in arrays 


// myArr.push(70)         //addding something to array we use name.push()
// console.log(myArr);

// myArr.pop()       //removes the last index 
// console.log(myArr);


// myArr.unshift(9)   //add anything in 0th index
// console.log(myArr);


// console.log(myArr.includes(3));   //is 3 included in the arrays or not 
// console.log(myArr.indexOf(4));    //whats the index of 4

// const newArr = myArr.join()    // .join() convert all elements of arrays into string 



//slice , splice 

console.log("a", myArr);   // original array


const myn1 = myArr.slice(1,3)
console.log("p", myn1);               //using slice : in slice the out-put gives a new array from the original array from start to end { which is given } but end isnot include  
                                    //  and the original array remains same 
console.log("b", myArr)


const myn2 = myArr.splice(1,3)
console.log("q", myn2);                  // using splice: in splice the last index is included but the out-put of original array changes it only print the remainings 
console.log("c", myArr);                  // using splice gives us a new arrays by removing the given datas 
