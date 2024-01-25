//for in loop 

const myObject = {
    js : "javascript",
    cpp : "c plus +",
    rb : "ruby"
}

for (const key in myObject) {
    console.log(`${key} is ${myObject[key]}`);
}


const progaming = ["js", "c++", "php"]

for (const key in progaming) {
    console.log(key);
    console.log(progaming[key]);

}

// we cant use for in loop in map

// const map = new Map()
// map.set('in', "india")
// map.set('us', "usa")
// map.set('id', "idk")

// for (const key in map) {
//     console.log(key);
// }
