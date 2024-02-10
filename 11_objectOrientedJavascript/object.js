function multi(num) {
    return num * 5
}

multi.power = 3

console.log(multi(2));
console.log(multi.power);
console.log(multi.prototype);        // this gives something more 

function createUser(username, score) {
    this.username = username
    this.score = score
    

}

createUser.prototype.incremwnt = function () {
    this.score++                        // have to use this.
}

createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

const chai = new createUser('snimeh', 25)          // the new keyword is important 
const tea = new createUser("kakoty", 340)

chai.printMe()       // printing is a new object. 
tea.printMe()


// protypes gives us the permission to create our own methods 


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/