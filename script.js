class Card {
  constructor(suit, rank, score){
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}

class Deck {
  constructor(){
    this.cards = []
    this.createDeck()
    this.shuffle()
  }

  createDeck(){
    let suits = ["Heart", "Spade", "Club", "Diamond"];
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

    for(let i = 0; i < suits.length; i++){
      for(let j = 0; j < ranks.length; j++){
        this.cards.push(new Card(suits[i], ranks[j], j + 2))
      }
    }

    return this.cards
  }

  shuffle() {
    let currentIndex = this.cards.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
    return this.cards;
  }

  draw(){
    return this.cards.pop()
  }
}

let gamblerDeck = new Deck()
console.log(gamblerDeck)

let shuffleDeck = new Deck()
shuffleDeck.shuffle()
console.log(shuffleDeck)

let myDeck = new Deck()
// myDeck.createDeck()
// console.log(myDeck)

 
 class GameOfWar {
  constructor() {
  this.player1 = []
  this.player2 = []
    //this.pile = []
     this.gameSetUp()
   }
   gameSetUp() {
    const deck = new Deck()
    let cards = deck.cards
    //Split the deck for each player
    this.player1.push(...cards.slice(0, cards.length / 2))
    this.player2.push(...cards.slice(cards.length / 2))
  }
 }
 let game = new GameOfWar()
 console.log(game)






// class Card {
//   constructor(suit, rank, score) {
//     this.suit = suit
//     this.rank = rank
//     this.score = score
//   }
 
// }

// let aceOfSpades = new Card("Spade", "Ace", "14")
// console.log(aceOfSpades)

// class Deck {
//   constructor() {
//     this.cards = []
//     this.createDeck()
//   }
//   createDeck() {
//     let suits = ["hearts", "clubs", "spades", "diamonds"]
//     let ranks = ["2", "3", "4", "5", "6"]

//     for (let i = 0; i < suits.length; i++) {
//       for (let j = 0; ranks.length; j++) {
//         this.cards.push(new Card(suits[i], ranks[j], j + 2))
//       }
//     }
//     return this.cards
//   }
//   shuffle() {
//     class Card {
//       constructor(suit, rank, score){
//         this.suit = suit
//         this.rank = rank
//         this.score = score
//       }
//     }
    
//     class Deck {
//       constructor(){
//         this.cards = []
//         this.createDeck()
//       }
    
//       createDeck(){
//         let suits = ["Heart", "Spade", "Club", "Diamond"];
//         let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    
//         for(let i = 0; i < suits.length; i++){
//           for(let j = 0; j < ranks.length; j++){
//             this.cards.push(new Card(suits[i], ranks[j], j + 2))
//           }
//         }
    
//         return this.cards
//       }
    
//       shuffle() {
//         let currentIndex = this.cards.length,  randomIndex;
      
//         while (currentIndex != 0) {
//           randomIndex = Math.floor(Math.random() * currentIndex);
//           currentIndex--;
      
//           [this.cards[currentIndex], this.cards[randomIndex]] = [
//             this.cards[randomIndex], this.cards[currentIndex]];
//         }
      
//         return this.cards;
//       }
    
//       draw(){
//         return this.cards.pop()
//       }
//     }
    
//     let gamblerDeck = new Deck()
//     console.log(gamblerDeck)
       
//     } 
//   }



// let myDeck = new Deck()
// myDeck.createDeck()
// console.log(myDeck)

 
// class GameOfWar {
//   constructor() {
//     this.player1 = []
//     this.player2 = []
//     this.pile = []
//     this.gameSetUp()
//   }
//   gameSetUp() {
//     const deck = new Deck()
//     let cards = deck.cards
//     //Split the deck for each player
//     this.player1.push(...slice.cards.length / 2)
//     this.player2.push(...slice.cards.length / 2)
//     cards.slice(cards.length / 2)
//   }
// }
// let game = new GameOfWar()
// console.log(game)






// // let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// // const shuffleArray = (array) => {
// //   for (let i = array.length - 1; i > 0; i--) {
// //     const j = Math.floor(Math.random() * (i + 1));
// //     [array[i], array[j]] = [array[j], array[i]];
// //   }
// // }

// // shuffleArray(cards)
// // console.log(cards.slice())

  



//   //Create cards and suits
// //Deal Cards between 2 players
// //Player 1 draw
// //Player 2 draw
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

  


