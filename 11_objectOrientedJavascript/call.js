function setUserName(username) {
    
    // complex DB calls

    this.username = username
    // console.log('called');       // checking if it called or not

}

function createUser(username, email, password) {
    
    setUserName.call(this, username)          // using .call and (this ) so that we can 


    this.email = email,
    this.password = password
}

const chai = new createUser('animesh', 'animesh@gmail.com', '1233')
console.log(chai);