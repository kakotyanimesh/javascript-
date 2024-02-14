const endDate = "22 Feb 2024 2:12:40 AM"

document.getElementById('date').innerHTML = endDate;

const inputs = document.querySelectorAll('input')


const clockFunction = ()=>{
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now )/ 1000

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600/ 24)
    inputs[1].value = Math.floor((diff/ 3600)% 24)
    inputs[2].value = Math.floor((diff/ 60) % 60)
    inputs[3].value = Math.floor((diff) % 60)
}

clockFunction()

setInterval(() => {
    clockFunction()
}, 1000);