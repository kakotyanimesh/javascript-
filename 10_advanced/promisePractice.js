// const promiseOne = new Promise ((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("frist promise");

//     }, 1000)
// })

// promiseOne.then(()=>{
//     console.log('promiseOne is done ig');
// })

// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log('why am i using dotthen');
//         resolve()
//     }, 1000);
// }).then(()=>{
//     console.log('still dont know why usuing dot then');
// })



// const userPromise = new Promise((resolve, reject)=>{
//  setTimeout(() => {
//     resolve({username : "animesh", password : "123"})
//  }, 1000);
// })

// userPromise.then((user)=>{
//     console.log(user)
// })


const promiseLast = new Promise ((resolve, reject)=>{
    setTimeout(() => {
        let error = true 
    if (!error) {
        resolve ({username: "akl", password: "123333"})
    } else{
        reject('error text displayed')
    }
    }, 1000);
})

promiseLast
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
    console.log('why am i printing this');
})