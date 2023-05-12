let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = ""
message = "We're logging out"
if(sum <=21){
    console.log("Do you want to draw a new card?😉")
}
else if(sum === 21){
 console.log("Wohooo! You've BlackJack !🔥")
 hasBlackJack = true;  
}
else {
    console.log("You're out of the game !🥲")
    isAlive = false 
}
