


const randomColor = ()=> {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        
    }
    return color 
}

let intervalId;

const startChangingColor = ()=>{
    if (!intervalId) {
        intervalId = setInterval(changeBgcolor, 1000)

    }

    function changeBgcolor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChagingColor = ()=> {
    clearInterval(intervalId)
    intervalId = null
}
document.getElementById('start').addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stopChagingColor)
