




















// destructuring objects 

const newCourse = {
    courseName : "idk-javaScript",
    courseInstructure : "idk you ",
    Price: 3000,

}

// console.log(newCourse["courseName"]);

const {courseName: name} = newCourse

console.log(name);







// let's study APIs : API is nothing but object or array without a name 

// {
//     "name": "animesh",
//     "haveGF": false,
//     "age": 20
// }

// the above written code is from an API 
// json files can be found inside []

// [
//     {},
//     {},
//     {}
// ]