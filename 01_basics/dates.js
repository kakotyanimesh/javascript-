//dates


let myDate = new Date ()

//using .to- for changing dates in different format

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(myDate.toTimeString());



console.log(typeof myDate);  // date is a OBJECT


let myNewDate = new Date(2003, 1, 7)  // the syntax is like yy, mm, dd and because of that syntax 
console.log(myNewDate.toString());  //in js month start from 0 : fav == 1 not 2

let myNewdate2 = new Date("2003-02-07")
console.log(myNewdate2.toString()); // here month started from 01 because of the syntax i.e yy--mm-dd

let mynewdate3 = new Date("02-07-2003") // syntax is mm-dd-yy for local string thst is india 
console.log(mynewdate3.toLocaleDateString());


let myTime = Date.now()   
console.log(myTime);  //date.now gives exact abhi ki date in milisecond 



console.log(Date.now()); //date in milisecond

console.log(Date.now()/1000);  // converted into seconds but we got decimal values

console.log(Math.floor(Date.now()/1000));  // now there's no decimal value 


let myNewdate02 = new Date()
console.log(myNewdate02.getDay());
console.log(myNewdate02.getMonth());



let anotherNewDate = myNewdate02.toLocaleDateString('default',{     
    weekday: "long"
})                          //converted to local string like monday tuesday etc 

console.log(anotherNewDate);




//               OUTPUTS ARE LISTED 

//       ue Dec 26 2023 00:41:46 GMT+0530 (India Standard Time)
//       ue Dec 26 2023
//       023-12-25T19:11:46.754Z
//       6/12/2023
//       6/12/2023, 12:41:46 am
//       on, 25 Dec 2023 19:11:46 GMT
//       0:41:46 GMT+0530 (India Standard Time)
//       bject
//       ri Feb 07 2003 00:00:00 GMT+0530 (India Standard Time)
//       ri Feb 07 2003 05:30:00 GMT+0530 (India Standard Time)
//       /2/2003
//       703531506782
//       703531506782
//       703531506.783
//       703531506
//       2
//       11
//       Tuesday
