const myNums = [1, 2, 3, 4, 5]

const newNums = myNums.map( (num) =>num + 10 )

console.log(newNums);


// lets do it through forEach

const newNumswithforeach = []

myNums.forEach( (nums) => {
    newNumswithforeach.push(nums + 10)
})

console.log(newNumswithforeach);

// chaining method 

const newNumsC = myNums
                    .map((num) => num* 10)
                    .map((num) => num + 1)
                    .filter((num) => num>= 40)

console.log(newNumsC);                    
