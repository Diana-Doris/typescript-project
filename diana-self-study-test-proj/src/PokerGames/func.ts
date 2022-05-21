import { Color, Mark } from './enums'
import { Deck } from './types'

export function createDeck(): Deck {
  const deck: Deck = []
  const marksVal = Object.values(Mark)
  const colorVal = Object.values(Color)
  for (const m of marksVal) {
    console.log(m)
    for (const c of colorVal) {
      console.log(c)
      deck.push({
        mark: m,
        color: c,
      })
    }
  }
  return deck
}
export function printDeck(deck: Deck) {
  let result = '\n'
  deck.forEach((card, i) => {
    let str = card.color + card.mark
    // if (card.mark <= 10) {
    //   str += card.mark
    // } else if (card.mark === 11) {
    //   str += 'J'
    // } else if (card.mark === 12) {
    //   str += 'Q'
    // } else {
    //   str += 'K'
    // }
    result += str + '\t'
    if ((i + 1) % 4 === 0) {
      result += '\n'
    }
  })
  console.log(result)
}
