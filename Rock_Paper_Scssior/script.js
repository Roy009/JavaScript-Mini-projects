const computerChoiceDisplay = document.getElementById('cc');
const userChoiceDisplay = document.getElementById('uc');
const resultDisplay = document.getElementById('result');


const choices = document.querySelectorAll('button');
let computerChoice
let userChoice
let result
choices.forEach(choices => choices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice() 
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if(randomNumber == 1){
        computerChoice = 'rock'
    }
    if(randomNumber == 2){
        computerChoice = 'scissor'
    }
    if(randomNumber == 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You Win'
    }
    if(computerChoice === 'rock' && userChoice === 'scissor') {
        result = 'You Lost'
    }
    if(computerChoice === 'paper' && userChoice === 'scissor') {
        result = 'You Win'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You Lost'
    }
    if(computerChoice === 'scissor' && userChoice === 'rock') {
        result = 'You Win'
    }
    if(computerChoice === 'scissor' && userChoice === 'paper') {
        result = 'You Lost'
    }
    resultDisplay.innerHTML = result
}