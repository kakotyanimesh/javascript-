
// function debouncePopulateDiv() {
//     // delay the call to populateDiv util debouncePopulateDiv not been called for 100ms
//     // and it been called atleast once 
//     // we use set time out 
//     // setTimeout(() => {
//     //     populateDiv()
//     // }, 1000); 
//     // but we have to close the clock also and for that we use clearTimeout 
//     const timeOut = setTimeout(() => {
//         populateDiv()
//     }, 100);
//     clearTimeout(timeOut)

// }

// a better and organized solution is written under 

let timeOut;
function debouncePopulateDiv() {
    clearTimeout(timeOut)
    timeOut = setTimeout(() => {
        populateDiv()
    }, 1000);
}
function populateDiv(){
    const a = document.getElementById("firstNumber").value;                 // .value to get the value from user 
    const b = document.getElementById("secondNumber").value;
    // const sum = document.getElementById("finalSum")
    //fetch use it when u r running it 
    // fetch("https://sum-server.100xdevs.com/sum?a=" + a +"&b=" +b)
    //     .then(function (response) {
    //         response.text()
    //             .then(function(ans){
    //                 document.getElementById("finalSum").innerHTML = ans
    //             })
    //     })
    
    // sum.innerHTML = parseInt(a) + parseInt(b)                             // parse int to convert to number and innerHTML to add text 
}


