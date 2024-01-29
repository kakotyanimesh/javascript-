const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((buttons)=>{
    buttons.addEventListener("click", (event)=>{
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id
            
        }
        if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id
            
        }
    }
    )
})


// code run 

// first we select the buttons with document.queryselectorall and the body with the same approache (use only qs) so that we can change the colour 
// after that used for each to select each buttons
// inside that added an event listner for clicking event 
// and used if statement for changing the color 
// body.style.bg-c used to change color 
// event.target.id === "idname"