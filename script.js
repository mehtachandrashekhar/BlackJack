let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
message = ""


function startGame(){
    if(sum <=21){
        message = "Do you want to draw a new card?😉"
    }
    else if(sum === 21){
     message = "Wohooo! You've BlackJack !🔥"
     hasBlackJack = true;  
    }
    else {
        message = "You're out of the game !🥲"
        isAlive = false 
    }
    
    console.log(message)
}
