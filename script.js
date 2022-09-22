class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.shuffle();
  }

  createDeck() {
    let suits = ["Heart", "Spade", "Club", "Diamond"];
    let rank = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Card(suits[i], rank[j], j + 2));
      }
    }

    return this.cards;
  }

  shuffle() {
    let currentIndex = this.cards.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[currentIndex],
      ];
    }
    return this.cards;
  }

  draw() {
    return this.cards.pop();
  }
}

class GameOfWar {
  constructor() {
    this.player1 = [];
    this.player2 = [];
    this.warPile = [];
    this.gameSetUp();
  }

  gameSetUp() {
    const deck = new Deck();
    let cards = deck.cards;
    this.player1.push(...cards.slice(0, cards.length / 2));
    this.player2.push(...cards.slice(cards.length / 2));
  }

  startGame() {
    while (this.player1.length > 0 && this.player2.length > 0) {
    let p1Card = this.player1.pop();
    let p2Card = this.player2.pop();
    //console.log(`P1 Card: ${p1Card.score}, P2 Card: ${p2Card.score}`);
   // console.log(`p1 Cards: ${this.player1.length}`);
      if (p1Card.score < p2Card.score) {
        this.player2.unshift(p2Card, p1Card)/*, ...pile */
        //this.warPile.length = 0;
      } else if (p1Card.score > p2Card.score) {
        this.player1.unshift(p1Card, p2Card);
        console.log(`p1 Cards after win: ${this.player1.length}`);
      } else if (p1Card.score === p2Card.score) {
       
        this.war();
      }
     }
    
  }

  war() {
    //while (this.player1.length > 0 && this.player2.length > 0) {
    let p1WarPile = this.player1.slice(0, 3);
    let p2WarPile = this.player2.slice(0, 3);
    console.log(`P1 Card: ${p1WarPile}, P2 Card: ${p2WarPile}`);
      
  
     if (p1card.score < p2card.score) {
       this.player2.unshift(...p1card, ...p2card) 
     } else if (p1card.score > p2.score) {
         this.player1.unshift(...p1card, ...p2card)
     }
     else if (p1card.score === p2Card.score) {
       while (this.player1.length > 0 && this.player2.length > 0) {
         if (p1Card.score < p2Card.score) {
           this.player2.unshift(...p2Card, ...p1Card)
         } else if (p1Card.score > p2Card.score) {
           this.player1.unshift(...p1Card, ...p2Card);
         } else if (p1Card.score === p2Card.score) {
         }

  }
      }
    }
      
     
        //  player2 draw() 3 cards in this.warPile = []
        // player 1 draw() 1 card in this.pile = []
        // player 2 draw() 1 card in this.pile = []
        // } else if (this.pile[0] < this.pile[1]) {
        // player1.push(warPile.length)}
        // else if {
        // player2.push(warPile.length)
  


let gamblerDeck = new Deck();
//console.log(gamblerDeck)

let shuffleDeck = new Deck();
shuffleDeck.shuffle();
//console.log(shuffleDeck)

let myDeck = new Deck();
myDeck.createDeck();
//console.log(myDeck)
let game = new GameOfWar();
console.log(game.startGame());
//console.log(gamblerDeck.draw())

//   //Create cards and suits DONE
// //Deal Cards between 2 players DONE
// //Player 1 draw in progress
// //Player 2 draw in progress
// //one of three results will happen
//     //player1 draws higher card
//       //player1 takes both cards
//     //player2 draws higher card
//       //player2 takes both cards
//     //both players tie
//       //players draw again
//           //player1- draws 3 cards face down
//             //player1- draws 1 card face up
//           //player2- draws 3 cards face down
//             //player2- draws 1 card face up
//   //winner takes all cards
//     //store them with one player

//   //when player has all cards - game finished
//     //if player does not have enough cards to finish, other
//     //player wins
