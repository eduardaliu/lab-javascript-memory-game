class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    if (!this.cards) return undefined;
    let arrayLength = this.cards.length;
    let randomElement;
    let lastElement;  
    while (arrayLength) {     // While there remain elements to shuffle…
      randomElement = Math.floor(Math.random() * arrayLength--);         // Pick a remaining element
      lastElement = this.cards[arrayLength];        // And swap it with the current element.
      this.cards[arrayLength] = this.cards[randomElement];
      this.cards[randomElement] = lastElement;
    }
    // return this.cards;
   }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true;
    } else if (card1 != card2) return false;
  }
  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2 ) return true;
    else return false;
  }
}