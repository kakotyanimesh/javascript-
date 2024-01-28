
function populateDiv(){
    const a = document.getElementById("firstNumber").value;                 // .value to get the value from user 
    const b = document.getElementById("secondNumber").value;
    const sum = document.getElementById("finalSum")
    sum.innerHTML = parseInt(a) + parseInt(b)                             // parse int to convert to number and innerHTML to add text 
}


// 48.56