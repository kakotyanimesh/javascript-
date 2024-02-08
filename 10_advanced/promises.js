const promiseOne = new Promise((resolve, reject)=>{
    // do an async task 
    // db calls, cryptography, network calls
    setTimeout(() => {
        console.log('async task is completed');
        resolve()                // connecting to resolve 
    }, 1000);

})

// resolve has connection with .then
promiseOne.then(()=>{
    console.log('promise consumed');

})                



new Promise((resolve, reject)=>{
    setTimeout(() => {
        console.log('async task two');
        resolve()
    }, 1000);
}).then(()=>{
    console.log('async two resolved');
})


// third promise

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username: "animesh", email: "animeshkakoty33@gmail.com"})
    }, 1000);
})

promiseThree.then((useer)=>{
console.log(useer);

})



// 4th promise

const promiseFourth = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "animesh", password: "123" })
        } else{
            reject('ERROR: something went wrong')
        }
    }, 1000);

})

promiseFourth
.then((user)=>{
    console.log(user);
    return user.username

})
.then((myusername)=>{
console.log(myusername);
})
.catch((err)=>{
console.log(err);
})
.finally(()=>{
    console.log('the promise is either resolved or rejected');
})

// 31.49


const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username : "javascript", password: "123"})
            
        } else {
            reject('error: js went wrong')
        }
    }, 1000);
})

// we can use .then / async await 

async function consumedPromiseFive() {
    try {
        const respinse = await promiseFive
    console.log(respinse);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive()


// async function getAllusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//         // console.log(response);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllusers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
 return response.json()
})
.then((data) => console.log(data))
.catch((err)=> console.log(err))