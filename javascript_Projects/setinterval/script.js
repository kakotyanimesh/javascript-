const alphabets = document.getElementById("alphabets")
const stopbtn = document.getElementById("stop")
const startbtn = document.getElementById("start")

let letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ"

let i = 0 
function updateAlphabets() {
    alphabets.textContent = letters
    [i];
    i++;
    if (i === 25) {
        i = 0
    }


}



startbtn.addEventListener('click',()=>{
    
 interval =  setInterval(updateAlphabets, 100)
})

stopbtn.addEventListener('click', ()=>{
    clearInterval(interval)
}
)



