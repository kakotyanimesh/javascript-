const score = 400  
// console.log(score);

const balance = new Number(100)   
// console.log(balance); //type is shown 

// console.log(balance.toString());  //number converted to string
// console.log(balance.toString().length);   
// console.log(balance.toFixed(3));   // want 3 numbres after decimal , used for ecoomerce cite 

const otherNumber = 423.89399

// console.log(otherNumber.toPrecision(3));    // to get precise value and here ans is 424

const newNum = 100000
// console.log(newNum.toLocaleString('en-IN'));  //To convert the counting to local sysytem like indian : comas and all



//+==============+MATHS+==============+

// console.log(Math);
// console.log(Math.abs(-4));  //change negative value to positive
// console.log(Math.round(4.6));  //round of : ans is 5
// console.log(Math.ceil(4.5)); // the highest value will be print 
// console.log(Math.floor(4.5));  //lowest round of is going to happpen
// console.log(Math.min(1, 2, 3, 5));  //get the min value 
// console.log(Math.max(1, 2, 3, 5)); // get the max valaue 


// console.log(Math.random());
// console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) +1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
