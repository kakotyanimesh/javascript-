// // // let faang = {
// // //     name: "Google",
// // //     salary: () => {
// // //         console.log("500k");
// // //     }
// // // }

// // // let developer = {
// // //     empId : 12132323,
// // //     task: () => {
// // //         console.log("task assigned");
// // //     }
// // // }

// // // developer.__proto__ = faang


// // // console.log(developer);
// // // developer.salary()
// // // console.log(developer.name);


// // // // let faang  = {
// // // //     name: "google",
// // // //     task: () => {
// // // //         console.log("500k salary");
// // // //     }
// // // // }

// // // // let developer  = Object.create(faang, {
// // // //     taskAssigned: {value: 2}
// // // // })

// // // // console.log(developer);


// // // const one  = () => Promise.resolve('one')

// // // async function test() {
// // //     console.log("Inside the function");

// // //     const result = await one()

// // //     console.log(result);
// // // }

// // // console.log("before calling the function");
// // // test()
// // // console.log("");

// // console.log("script start");

// // setTimeout(() => {
// //     console.log("settimeout");
// // }, 0);

// // new Promise((resolve, reject) => {
// //     console.log("promise constructor");
// //     resolve("promise resolved")
// // }).then(function (res) {
// //     console.log(res);
// // })

// // async function asyncFN(){
// //     console.log("async function start");

// //     await new Promise((resolve)=> {
// //         console.log("promise in async");
// //         resolve("async/await resolved")

// //     })

// //     console.log("asyncFN end");


// // }

// // asyncFN()

// // console.log("script end");


// function loadBalance() {
//     let userBalance = 100

//     function addBalance() {
//         let newBalance = ++userBalance
//         return newBalance
//     }
//     return {addBalance}
// }

// let balance = loadBalance()

// console.log(balance.addBalance());
// console.log(balance.addBalance());
// console.log(loadBalance().addBalance());


// function getThis() {
//     console.log(this);
// }

// const object = {
//     getThis
// }

// getThis()
// object.getThis()

// const getThis = () => {
//     console.log(this);
// }

// const object = {
//     getThis
// }

// getThis()
// object.getThis()



// call apply and bind


// call : imediately invoked the function with specified this

// apply: immediately invoked the function with specified this but arguments should be passed in ARRAY : A: ARRAY

// bind : return a new function when called has its this value set to provide value 
// const person = {
//     name: "animesh", 
//     age: 20

// }

// function introduce(interest, hobby) {
//     console.log(`My name is ${this.name} and age ${this.age} and i like ${interest} and ${hobby}`);
// }

// introduce.call(person, "cricket", "maths")
// // we just have to pass the parameters

// introduce.apply(person,["cricket", "math"])
// // we have to pass the parameters inside array

// const boundIntroduec = introduce.bind(person, "cricket")
// // bind returns a new function as it is 
// boundIntroduec("maths")




// async await 

// async function fetchedData() {
//     try {
//         const response = await fetch("https://api.api-ninjas.com/v1/jokes?limit=")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
        
//     }
// }


// fetchedData()
// .then(()=> console.log("data fetched"))
// .catch(err => console.log(err))


// function Person(name, age) {
//     this.name = name,
//     this.age = age 

// }

// const person = new Person("animesh", 21)

// console.log(person);


// function outerFn() {
//     const outervariable = "clouser "

//     function innerfn(){
//         console.log(outervariable);

//     }
//     return innerfn()

// }

// const closure = outerFn()

// divideBy10(100)
// function divideBy10(x) {
//     console.log(x/10);
    
// }


// function add(x) {
//     return (y) => x + y
    
// }

// const addtwo = add(2)
// console.log(addtwo(3));


// ifee

(function() {
    // Private variables and functions
    const name = 'John';
    function sayHello() {
      console.log('Hello, ' + name + '!');
    }
  
    // Public functions
    function greet() {
      console.log('Hello, world!');
    }
  })();