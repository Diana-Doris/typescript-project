// import { createDeck, printDeck } from './func'

import { Deck } from './deck'

// const deck = createDeck()
// printDeck(deck)

const deck = new Deck()
deck.shuffle()
deck.print()
const result = deck.publish()

console.log(result.left.print())
console.log(result.player1.print())
console.log(result.player2.print())
console.log(result.player3.print())
