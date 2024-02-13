function User(email, password) {
    this._email = email,
    this._password = password,

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })
}

const animesh = new User('animesh', '123')        // we have to use the 'new' keyword
console.log(animesh.email);