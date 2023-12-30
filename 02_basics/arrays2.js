const hero_1 = ["animesh", "kakoty"]
const hero_2 = ["binanda", "kakoty2"]

// hero_1.push(hero_2)        //push commend takes the second array as one element

// console.log(hero_1);

// so we got two ways to do this kind of merge 
// concat and ...spread 


const new_heros = hero_1.concat(hero_2)
console.log(new_heros);     //concat isnot a best way 


const new_hero_two = [...hero_1, ...hero_2]
console.log(new_hero_two);            // spread method or tripple dot method 





/// convert into a single flat array of the given below 

const anotherNewArray = [1, 2, 3, [4, 5, 6,], [7, 8, [8, 9, [10]]]]
// console.log(anotherNewArray.flat(Infinity));

const convertToFlatArray = anotherNewArray.flat(Infinity)
console.log(convertToFlatArray);                     // so syntax is .flat(infinity)


// conversion of various data types to arrrays

console.log(Array.isArray("animesh"));     // askind is "animesh is array or not " using Array.isArray

console.log(Array.from("animesh"));         //converting to arrays with help of Array.from


console.log(Array.from(name = "animesh"));     //unable to convert to {important for interview}

//

let Score1 = 100
let Score2 = 200
let Score3 = 300

// lets store them in arrays

let storeInArray = Array.of(Score1, Score2, Score3)  // so here we store it in array by using Array.of(x, y , z ....)
console.log(storeInArray);

// const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(Array.from(set));