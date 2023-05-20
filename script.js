let firstCard = 6;
let secondCard = 9;
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

    cardsEl.textContent = "Cards: " + cards[0] +" "+ cards[1];
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

    let newCard = 2;
    sum += newCard;
    cards.push(newCard);
    renderGame();
}
