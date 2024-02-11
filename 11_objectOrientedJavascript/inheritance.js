class User {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password

    }


    addCourses(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai = new Teacher('animesh', 'chai@gmail.com', '323')
chai.addCourses()
chai.logme()

const tea = new User('kakoty')
tea.logme()


console.log(chai === tea);       // false 
console.log(chai === Teacher);   // false 
console.log(chai instanceof Teacher);   //true 
console.log(chai instanceof User);       //true 