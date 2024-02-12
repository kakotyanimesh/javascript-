const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(descripter);     // here if we print the value of pi then its prints a hardcoded value : which we cant overwrite 


// lets create some hardcoded objects by ourselves

const chai = {
    name : 'animesh',
    price : 240,
    isAvailable : true,

    orderchai: function () {
        console.log('code fatt gyaa');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));   // we are linking the name property here
// => {
 // value: 'animesh',
 // writable: true,
 // enumerable: true,
 // configurable: true
//}

// console.log(Object.getOwnPropertyDescriptor(chai, 'price'));  // have to done for each and every 


// lets define properties
Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false,               // check here when u uncomment out the writable or configurable the values that printed by the foreach get different 
    // configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}