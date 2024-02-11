class User{
    constructor(username){
        this.username = username

    }

    logMe(){
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
        super(username)

        this.email = email
    }
}

const android = new Teacher('android', 'android@gmaill')
android.logMe()
console.log(android.createId());