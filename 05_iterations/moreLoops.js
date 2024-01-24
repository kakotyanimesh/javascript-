// for of 
// [] => aka array
// {} => aka objects

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
// for of loop 
for (const num of arr) {
    console.log(num);
    
}

const greetings = "hellow world"

for (const greet of greetings) {
    console.log(`each character is ${greet}`);
    
}


// Maps  : inside map we store unique values inside {}

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "united states of America")
map.set('ch', "China")

console.log(map);