const clock = document.getElementById('clock')

setInterval(() => {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);




// clock project 
// we use set interval so that it changes in every 1000ms interval 
// define date as new Date()
// toLocalTimeString() to show the local time and thats all 