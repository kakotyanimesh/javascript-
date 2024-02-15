// js for first project 

var btn = document.querySelector("button")
var para = document.querySelector('p')
btn.addEventListener('click', ()=>{
    para.textContent = "hey hellow"
})


// js for image swap 

const imgOne = document.getElementById('imgOne')
const imgTwo = document.getElementById('imgTwo')


document.getElementById("buttonTwo").addEventListener('click', ()=>{
    
    // imageID.SRC => is giving us the source of the image and we are just repeating the step in next line
    const src1 = imgOne.src 
    const src2 = imgTwo.src

    // we have to write the above two line code inside the arrow function not outside !

    imgOne.src = src2
    imgTwo.src = src1
})


// js for third prject 

const form = document.querySelector("form")
const inputs = document.querySelectorAll('input[type = "text"]')

form.addEventListener("submit", (e)=> {
    e.preventDefault()                // we are preventing the default behaviour of form => stopping from reloading 
    let isEmpty = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {           // inputs[i].value is used to get from user and trim() to prevent spaces and '' means blank space 
            let isEmpty = true;

            alert('dont submit blank space')
            break
        } 
    }
    if (!isEmpty) {
        alert('form sbmitted')             // form submitted is outside the for loop so that multiple alert dont occure
    }


})