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
    
    this.war();
  }

  gameSetUp() {
    const deck = new Deck();
    let cards = deck.cards;
    this.player1.push(...cards.slice(0, cards.length / 4));
    this.player2.push(...cards.slice(cards.length / 4));
  }

  startGame() {
    while (this.player1.length > 0 && this.player2.length > 0) {
     // console.log('p1 length: ', this.player1.length)
     // console.log('p2 length: ', this.player2.length )
      let p1Card = this.player1.pop();
      let p2Card = this.player2.pop();
      //console.log(`P1 Card: ${p1Card.score}, P2 Card: ${p2Card.score}`);
      console.log(`p1 Cards: ${this.player1.length}`);
      if (p1Card.score < p2Card.score) {
        this.player2.unshift(p2Card, p1Card, ...this.warPile)
        this.warPile = []
        //this.warPile.length = 0;
      } else if (p1Card.score > p2Card.score) {
        this.player1.unshift(p1Card, p2Card, ...this.warPile);
        this.warPile = []
        // console.log(`p1 Cards after win: ${this.player1.length} p2 cards: ${this.player2.length}`);
      } else if (p1Card.score === p2Card.score) {
        this.war();
      }
    }
  }

  war() {
   
    if (this.player1.length >= 4 && this.player2.length >= 4) {
      let p1WarPile = this.player1.splice(this.player1.length - 3, 3);
      let p2WarPile = this.player2.splice(this.player2.length - 3, 3);
      this.warPile.push(...p1WarPile, ...p2WarPile)
      //console.log(`P1 cards: ${p1WarPile}, P2 cards: ${p2WarPile}`);
      //do loop another loop? 
      this.startGame()
    } else if (this.player1.length < 4 && this.player2.length > 4) {
      //console.log("player 2 wins!")
    } else if (this.player2.length < 4 && this.player2.length < 4) {
     // console.log("player 1 wins!")
    }
  }
}
     
  

          


let gamblerDeck = new Deck();
//console.log(gamblerDeck)
//console.log(gamblerDeck.draw())

let shuffleDeck = new Deck();
shuffleDeck.shuffle();
//console.log(shuffleDeck)

let myDeck = new Deck();
myDeck.createDeck();
//console.log(myDeck)
let game = new GameOfWar();

console.log(game.startGame());










////Create cards and suits DONE
// //Deal Cards between 2 players DONE
// //Player 1 draw DONE
// //Player 2 draw DONE
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
