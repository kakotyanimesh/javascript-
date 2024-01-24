const userEmail = "AMIMESH@GMAIL"

if (userEmail) {
    console.log("got your email");
} else {
    console.log("dont have email");
}


const userEmail2 = ""    // falsy value : we assume its false 

if (userEmail2) {
    console.log("got your email");
} else {
    console.log("dont have email");
}


const userEmail3 = {}         // truthy value : assume its true

if (userEmail3) {
    console.log("got your email");
} else {
    console.log("dont have email");
}


const userEmail4 = []         // truthy value : assume its true

if (userEmail4) {
    console.log("got your email");
} else {
    console.log("dont have email");
}


// falsy values 
    //   false, 0, -0, BigInt 0n, "", ``, null, undefined, NaN

// truthy values 
        // "0", 'false', " ", [], {}, function () {}


// detection of empty object or array 

const emptyArray = []

if (emptyArray.length == 0) {
    console.log("array is empty");
}

const emptyObject = {}

if (Object.keys(emptyObject).length == 0) {               // to convert object to arrary so that we can use .length property we use ** Object.Key(object_Name).lengh **
    console.log("object is empty ");
    
}


// Nullish Coalescing Operator ?? : null undefined

let val1
// val1 = 5 ?? 10        // return 5
// val1 = null ?? 10        // return 10 second value 
// val1 = undefined ?? 10        // return 10 second value 
val1 = null ?? 10 ?? 20        // return 10 second value 

console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice > 60 ? console.log("price is greater than 60"): console.log("price is less than 60");
