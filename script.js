let firstCard = getRandonCard();
let secondCard = getRandonCard();
let cards = [firstCard,secondCard]; // ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.querySelector("#cards-el");

function startGame(){
    renderGame();
}

function renderGame(){

    cardsEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] +" ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
     message = "You've BlackJack !"
     hasBlackJack = true;  
    }
    else {
        message = "You're out of the game !"
        isAlive = false 
    }
    
    messageEl.textContent = message;
}

function newCard(){

    console.log("Drawing a new card form the deck.")
    let newCard = getRandonCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
}

function getRandonCard(){
// Math.randon() range = 0.000 to o.99999 (not inlcusive of 1) 
// Math.floor(Math.random()*6) + 1 will return 1-6 int values 
let randomNumber = Math.floor(Math.random()*13) + 1;
console.log(randomNumber)
return randomNumber;
}
