let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;
let hasBlackJack = false

if(sum < 21){
    console.log("Do you want to draw a new card?😉")
}
else if(sum === 21){
 console.log("Wohooo! You've BlackJack !🔥")
 hasBlackJack = true;  
}
else {
    console.log("You're out of the game !🥲")
}

if(age>21){
    console.log("you are eligible to vote")
}