const name = "Animesh"
const repoCount = 50

// console.log(name + repoCount + " Value ");

console.log(`Hello my name is ${name} and 
my repo count is ${repoCount}`);  // string interpolution , here we write inside the ${}


const gameName = new String('animesh-ka-ko-ty')
console.log(gameName[0]);   //acesssing the 0th index value

console.log(gameName.length);  //get the total lenght of given string value 

console.log(gameName.toUpperCase());  // convert to uppercase

console.log(gameName.charAt(3));  // what is in that position

console.log(gameName.indexOf('m'));  // to find the place number of m in given string 


const newString = gameName.substring(0,4)  //dividing the given string to sub category , first position is taken but not the last one
console.log(newString);


const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "        animesh     "   //there's gaps in the given string


console.log(newStringOne);      // the gaps arenot removed , it willl print as it is 

console.log(newStringOne.trim());    // .trim() will cut the unnessery gaps from the result 


const url = "https://animesh.in/animesh%33kakoty"

console.log(url.replace('%33', '-'));  //replacing in string by using .replace 

console.log(url.includes("animesh"));  // is animesh included inside the url

console.log(gameName.split('-'));  //spliting the gameName string at - separator



//study string more


console.log(`hellow my name is ${gameName} and my another string is ${newString}`);