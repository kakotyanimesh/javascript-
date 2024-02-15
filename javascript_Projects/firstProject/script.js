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