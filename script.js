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
      console.log("p1 length: ", this.player1.length);
      console.log("p2 length: ", this.player2.length);

      let p1Card = this.player1.pop();
      let p2Card = this.player2.pop();
      console.log(`P1 Card: ${p1Card.score}, P2 Card: ${p2Card.score}`);
      console.log(`p1 Cards: ${this.player1.length}`);
      if (p1Card.score < p2Card.score) {
        this.player2.unshift(p2Card, p1Card, ...this.warPile);
        this.warPile.length = 0;
      } else if (p1Card.score > p2Card.score) {
        this.player1.unshift(p1Card, p2Card, ...this.warPile);
        this.warPile.length = 0;
        console.log(
          `p1 Cards after win: ${this.player1.length} p2 cards: ${this.player2.length}`
        );
      } else if (p1Card.score === p2Card.score) {
        this.war(p1Card, p2Card);
      }
    }

    if (this.player1.length <= 0) {
      console.log("player 2 wins!", this.player2.length);
      return "player 2 wins!";
    } else {
      console.log("player 1 wins!", this.player1.length);
      return "player 1 wins!";
    }
  }

  war(c1, c2) {
    this.warPile.push(c1, c2);

    if (this.player1.length >= 4 && this.player2.length >= 4) {
      let p1WarPile = this.player1.splice(this.player1.length - 3, 3);
      let p2WarPile = this.player2.splice(this.player2.length - 3, 3);
      this.warPile.push(...p1WarPile, ...p2WarPile);
    } else if (this.player1.length < 4 && this.player2.length >= 4) {
      this.player2.unshift(...this.warPile);
      this.player2.unshift(...this.player1.splice(0, this.player1.length));
      this.warPile.length = 0;
    } else if (this.player2.length < 4 && this.player1.length >= 4) {
      this.player1.unshift(...this.player2.splice(0, this.player2.length));
      this.player1.unshift(...this.warPile);
      this.warPile.length = 0;
    }
  }
}

let game = new GameOfWar();
console.log(game.startGame());
