// let myName = "animesh        "

// // we have to make an method named as truelength

// console.log(myName.truelength);


let myHeros = ['animesh', 'kakoty']

let heroPower = {
    animesh : 'hammer',
    kakoty : 'sling',

    getKakotyPower: function () {
        console.log(`koty's power is ${this.kakoty}`);
    }

}

// creating method named hitesh inside object and array
  
Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all object`);
}


Array.prototype.heyhitesh = function () {
    console.log('using inside array');
}

myHeros.hitesh()
myHeros.heyhitesh()
// heroPower.heyhitesh()
// heroPower.hitesh()

// when we create method in object then everyone can aceess it !2

const User = {
    name : 'animesh',
    email : "animeshkakoty@google.com"
}
const Teacher = {
    makevideo : true,

}

const TeachingSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssignment : 'js ',
    fullTime : true,
    __proto__: TeachingSupport         // linking TeachingSupport with TAsupport
}


Teacher.__proto__ = User       // linking user properties with teachers


// the modern syntax of linking

Object.setPrototypeOf(TeachingSupport, Teacher)
// first jak properties dim and second tu jar pora dim 



let anotherUsername = 'animesh'

String.prototype.trueLength = function () {
        console.log(`${this}`);
        console.log(`true length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
'hitesh'.trueLength()
'koty'.trueLength()