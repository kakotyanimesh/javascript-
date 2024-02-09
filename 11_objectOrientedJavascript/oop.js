const user = {
    // this is object
    username : "animesh",
    loginCount : "2",
    signIn : true,


    getUserDetails: function(){
        // console.log('got user details from db ');
        console.log(`username : ${this.username}`);
        console.log(this);   // printing the user object 

    }
}

// console.log(user.username);

// console.log(this); // priting this in global context

// console.log(user.getUserDetails());




// constructure function 

function User(username, loginCount, isLoggedin) {
    this.username = username         // lhs => variable and rhs => value that passed
    this.loginCount = loginCount
    this.isLoggedin = isLoggedin


    return this           
}

const userOne = new User('animesh', 12, true)
const userTwo = new User('kakoty', 13, false)
console.log(userOne);
console.log(userTwo);


// when we use the 'new' => an empty object created => known as instance
// new object created 
// in 2nd step an constructure function because of new keyword
// 