let humanScore=0
let compScore=0

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

let playGame=()=>{
    let humanChoice= getHumanChoice()
    let compChoice= getCompChoice()
    showResponse(playRound(humanChoice,compChoice))
}

for(i=0;i<5;i++)
    playGame()
