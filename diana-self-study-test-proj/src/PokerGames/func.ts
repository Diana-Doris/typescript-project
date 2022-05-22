import { Color, Mark } from './enums'
import { Card, Deck, Joker } from './types'

export function createDeck(): Deck {
  const deck: Deck = []
  const marksVal = Object.values(Mark)
  const colorVal = Object.values(Color)

  for (const m of marksVal) {
    console.log(m)
    for (const c of colorVal) {
      //   console.log(c)
      // 第一种方式鸭子辨型法
      //   const card: NormalCard = {
      //     mark: m,
      //     color: c,
      //     getString() {
      //       return this.color + this.mark
      //     },
      //   }
      //   deck.push(card)
      // 第二种方式类型断言
      //   deck.push({
      //     mark: m,
      //     color: c,
      //     getString() {
      //       return this.color + this.mark
      //     },
      //   } as Card)

      deck.push(<Card>{
        mark: m,
        color: c,
        getString() {
          return this.color + this.mark
        },
      })
    }
  }
  let joker: Joker = {
    type: 'big',
    getString() {
      return 'jo'
    },
  }
  deck.push(joker)
  joker = {
    type: 'small',
    getString() {
      return 'JO'
    },
  }
  deck.push(joker)
  return deck
}
export function printDeck(deck: Deck) {
  let result = '\n'
  deck.forEach((card, i) => {
    let str = card.getString()
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
