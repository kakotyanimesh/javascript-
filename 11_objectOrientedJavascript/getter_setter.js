// getter or setters is for giving permissions like : password access or email access


class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()      // _email is a private property :)
        
    }
    set email(value){
        this._email = value
    }

    
    get password(){
        return this._password.toUpperCase()     //_password  
        // return `${this._password}animesh`

    }
    set password(value){
        this._password = value     // _password 

    }

    // we are using _password inside the get and set so that the "Maximum call stack size exceeded" error 
    // should not occure 
    // if we dont use the _password then there will a race b/w constructor and get/set to set the password 
    // and memory stack became full 
}

const animesh = new User('animesh@gmail.com', 'abc')
console.log(animesh.password);
console.log(animesh.email);

// Maximum call stack size exceeded : search on google what is this ?
