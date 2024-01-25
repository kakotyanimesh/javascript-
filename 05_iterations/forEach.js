const coding = ['js', 'ruby', 'python']

coding.forEach(function (params) {
    console.log(params);
})

coding.forEach( (params) => {
    console.log(params);
})

// lets declare fn first then use foreach loop

function printMe(params) {
    console.log(params);
}

coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
console.log(item, index, arr);
})


// taking object inside array

const myCoding = [
    {
        languageName : 'javascript',
        fileName : 'js'
    },
    {
        languageName : 'python',
        fileName : 'py'
    },
    {
        languageName : 'java',
        fileName : 'java'
    }
]

myCoding.forEach( (item) => {
 
 console.log(item.languageName, item.fileName);             // we ar talking value from object which is inside an array 

})