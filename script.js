const cards= document.querySelectorAll('.memory-card');
let loackBoard=false;
let hasFlippedCard=false;
let firstCard, secondCard;

function flipCard() {
  if(loackBoard) return;
  if(this===firstCard)return;
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second click
    hasFlippedCard = false;
    secondCard = this;

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
      // it's a match!
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      resetBoard();
    } else {
      // not a match
      loackBoard=true;
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        loackBoard=false;
        resetBoard();
      }, 1000);
    }
  }
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}


(function shuffle(){
  cards.forEach(card=>{
let rand=Math.floor(Math.random()*8);
card.style.order=rand;
  });
})();

cards .forEach(card=>card.addEventListener('click',flipCard));