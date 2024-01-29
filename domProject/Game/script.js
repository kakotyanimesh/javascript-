let randomNumber = parseInt(Math.random() * 100 +1 )  // generating random number

const submit = document.querySelector("#subt")   

const userInput = document.querySelector("#guessField")

const guessSlot = document.querySelector(".guesses")

const lastResult = document.querySelector(".lastResult")

const remaining = document.querySelector('.lastResult')

const lowOrhi = document.querySelector(".lowOrHi")

const starOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let preVGues = []

let numGuess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // validating the guess 
    if (isNaN(guess)) {
        alert(`enter a valid number`)              // checking is the input a valid number or not 
    }
    else if (guess < 1) {
        alert(`enter a valid number, greater than 1 `)
    }
    else if (guess > 100) {
        alert(`enter a valid number, less than 100`)
    } else {
        preVGues.push(guess)          // pushing the input value to prevGuess array 
        if (numGuess === 11) {          // if total number of guess is 11 then stop the game 
            displayGuess(guess)
            displayMsg(`game over , random number is ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)           // 
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {                 // checking if the user input is correct or not 
        displayMsg(`you guessed it right `)          // displaying the msg
        endGame()
    } else if ( guess < randomNumber) {
        displayMsg(`your guess is too low`)
    } else if (guess > randomNumber){
        displayMsg(`your guess is too high`)
    }
}


function displayGuess(guess) {
    userInput.value = ''             // cleaning the user input 
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
    
}
function displayMsg(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`        //  displaying message 
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '');            // we wont able to put value in the input box which has subt as id 
    p.classList.add('button')                         // adding a button with text in the p tag 
    p.innerHTML = `<h2 id="newgamebutton" >start a new game </h2>`
    starOver.appendChild(p)                   // adding the button to start the game
    playgame = false
    newGame()

    
}

function newGame() {
    const newGameButton = document.querySelector("#newgamebutton")
    newGameButton.addEventListener('click', (event)=>{
        randomNumber = parseInt(Math.random() * 100 + 1)
        preVGues = []
        numGuess = 1
        guessSlot.innerHTML =  ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        starOver.removeChild(p)
        newGame = true

    })
    
}