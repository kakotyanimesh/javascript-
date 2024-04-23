class User{
    constructor(username){
        this.username = username

    }

    loggMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return `123`             //stop accessing 
    }
}

const animesh = new User('animesh')
// console.log(animesh.createId());

class Teacher extends User{
    constructor(username, email){
        super(username) // taking the value of username from User

        this.email = email
    }
}

const android = new Teacher('android', 'android@gmaill')
android.loggMe()
console.log(android.createId());
// as we are using static it stops from accessing => commentout 29 line and 