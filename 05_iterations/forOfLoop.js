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

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('US', "united states of America")
// map.set('ch', "China")

// console.log(map);

// for (const key of map) {
//     console.log(key);           // print like array
    
// }
// for (const [key, value] of map) {
//     console.log(key, `:>`, value);         // destructure of array
// }

// const kakoty = new Map()
// animesh.set("koty")
// animesh.set("kakoty")
// animesh.set("didnot understand anything")

// for (const iterator of kakoty) {
//     console.log(iterator);
// }
// const animesh = new Map()
// map.set("koty")
// map.set("kakoty")
// map.set("didnot understand anything")

// for (const iterator of map) {
//     console.log(iterator);
// }

const animesh = new Map()
animesh.set("lalu", 2)
animesh.set("done", 2)                  // im just trying to change map=> animesh before set 
animesh.set("done2", 2)

for (const [iterator, value] of animesh) {
    console.log(iterator, value);
}

const kakoty = new Map()
kakoty.set("lalu2", "one")
kakoty.set("lalu4", "two")
kakoty.set("lalu3", "three")

for (const [iterator, blue] of kakoty) {
    console.log(iterator, blue);                       // so in for-of loop i dont have to write specify every value , the system will decide eveerything as of {hoping im right}

    
}


// object and forof loop

const myObject = {
    'game1' : 'nfs',
    'game2' : 'spider'
}

// for (const [key, value] of myObject) {
//     console.log(key, value);
// }

// we cant iterate objects like maps in forof loop
