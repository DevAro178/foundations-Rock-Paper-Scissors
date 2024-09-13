let rockBtn=document.querySelector("div.options div.rock")
let paperBtn=document.querySelector("div.options div.paper")
let scissorsBtn=document.querySelector("div.options div.scissors")
let humanScoreBoard=document.querySelector("div.scoreBoard div.human span.score")
let computerScoreBoard=document.querySelector("div.scoreBoard div.computer span.score")
let resultDiv=document.querySelector("div.choices div")
let gameEndMessage=document.querySelector("div.choices span")
let humanScore=0
let compScore=0

rockBtn.addEventListener('click',e=>{
    playGame(0)
})
paperBtn.addEventListener('click',e=>{
    playGame(1)
})
scissorsBtn.addEventListener('click',e=>{
    playGame(2)
})

let getHumanChoice=()=>{
    let input=prompt("Enter your choice - Rock, Paper, Scissors: ").toLowerCase()
    switch(input){
        case('rock'):
            return 0
        case('paper'):
            return 1
        case('scissors'):
            return 2
        default:
            return false
    }
}

let getCompChoice=()=>{
    return Math.floor(Math.random() * 3)
}

let playRound=(humanChoice,compChoice)=>{
    switch(humanChoice){
        case 0:
            switch(compChoice){
                case 0:
                    return `It's a tie.`
                case 1:
                    compScore++
                    return `You Lose! Paper beats Rock.`
                case 2:
                    humanScore++
                    return `You Win! Rock beats Scissors.`
                default: 
                    return null
            }
        case 1:
            switch(compChoice){
                case 0:
                    humanScore++
                    return `You Win! Paper beats Rock.`
                case 1:
                    return `It's a tie.`
                case 2:
                    compScore++
                    return `You Lose! Scissors beats Paper.`
                default: 
                    return null
            }
        case 2:
            switch(compChoice){
                case 0:
                    compScore++
                    return `You Lose! Rock beats Scissors.`
                case 1:
                    humanScore++
                    return `You Win! Scissors beats Paper.`
                case 2:
                    return `It's a tie.`
                default: 
                    return null
            }
        default:
            return null
    }
}

let showResponse=(res)=>{
    if(!res)
        console.log("Invalid Option Selected.")
    console.log(`Human: ${humanScore} - Computer: ${compScore}`)
    console.log(res)
}

let playGame=(humanChoice)=>{
    // let humanChoice= getHumanChoice()
    let compChoice= getCompChoice()
    let playRoundRes=playRound(humanChoice,compChoice)
    showResponse(playRoundRes)
    resultDiv.textContent=playRoundRes
    humanScoreBoard.textContent=humanScore
    computerScoreBoard.textContent=compScore

    if(humanScore==5||compScore==5){
        if(humanScore==5){
            console.log("You have Won.");
            humanScore=0
            resultDiv.textContent="You have Won the Game!"
        }
        else if(compScore==5){
            console.log("You Lost! Try Again.")
            compScore=0
            resultDiv.textContent="Bot has Won the Game!"
        }
        gameEndMessage.textContent="Game has ended in order to restart choose any option from below!!!"
    }
        
}
