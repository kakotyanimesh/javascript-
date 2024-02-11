// ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return  `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`       // toUpperCase() => to change to upper case
    }
    changeUsernamelowercase(){
        return`${this.username.toLowerCase()}`        // toLowerCase() => to change to lower case

    }
}



const chai = new User('animesh', 'aimesh@gmail.com', '123')
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
console.log(chai.changeUsernamelowercase());




// behind the scene

// function User(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function () {
//     return `${this.password}abc`
    
// }

// User.prototype.changerUsername = function () {
//     return `${this.username.toUpperCase()}`
// }
// User.prototype.changerUsernamel = function () {
//     return `${this.username.toLowerCase()}`
// }


// const tea = new User('kakoty', 'kakoty@gmail.com', '123')

// console.log(tea.encryptPassword());
// console.log(tea.changerUsername());
// console.log(tea.changerUsernamel());

