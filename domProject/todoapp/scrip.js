function createChild(title, description, id) {
    const child = document.createElement("div")
    const firstChild = document.createElement("div")
    firstChild.innerHTML = title
    const secondChild = document.createElement("div")
    secondChild.innerHTML = description
    const thirdChild = document.createElement("button")
    thirdChild.innerHTML = "mark as done"
    thirdChild.setAttribute("onclick", `marksasDone(${id}`)
    child.appendChild(firstChild)
    child.appendChild(secondChild)
    child.appendChild(thirdChild)
    child.setAttribute("id", id)
    return child

    
}


function updateDom(state) {
    const parent = document.getElementById("container")
    parent.innerHTML = ''
    for (let i = 0; i < state.length; i++) {
        const child = createChild(state[i].title, state[i].description, state[i].id)
        parent.appendChild(child)
        
    }


    
}

// window.setInterval(async function (){
//     const res = await fetch("https://sum-server.100xdevs.com/todos")
//     const json = await res.json()
//     updateDom(json.todos)
// }, 1000)