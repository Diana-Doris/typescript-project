import { Color, Mark } from './enums'
import { Card, Joker } from './types'

interface PublishResult {
  player1: Deck
  player2: Deck
  player3: Deck
  left: Deck
}

export class Deck {
  private cards: Card[] = []

  constructor(cards?: Card[]) {
    if (cards) {
      this.cards = cards
    } else {
      this.init()
    }
  }

  private init() {
    const marksVal = Object.values(Mark)
    const colorVal = Object.values(Color)

    for (const m of marksVal) {
      //   console.log(m)
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

        this.cards.push(<Card>{
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
    this.cards.push(joker)
    joker = {
      type: 'small',
      getString() {
        return 'JO'
      },
    }
    this.cards.push(joker)
  }
  print() {
    let result = '\n'
    this.cards.forEach((card, i) => {
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
  /**
   * 洗牌
   */
  shuffle() {
    // [...]
    for (let i = 1; i < this.cards.length; i++) {
      const targetIndex = this.getRandom(0, this.cards.length)
      const temp = this.cards[i]
      this.cards[i] = this.cards[targetIndex]
      this.cards[targetIndex] = temp
    }
  }
  /**
   * 发牌，发完牌之后，得到card[]，
   */
  publish(): PublishResult {
    // const result: [Deck, Deck, Deck, Deck] = [[], [], [], []]
    let player1: Deck, player2: Deck, player3: Deck, left: Deck

    player1 = this.takeCards(17)
    player2 = this.takeCards(17)
    player3 = this.takeCards(17)
    left = new Deck(this.cards)

    return { player1, player2, player3, left }
  }
  private takeCards(n: number): Deck {
    const cards: Card[] = []
    for (let i = 0; i < n; i++) {
      cards.push(this.cards.shift() as Card)
    }
    return new Deck(cards)
  }
  /**
   *
   * @param min
   * @param max
   * @returns
   */
  getRandom(min: number, max: number) {
    const dec = max - min
    return Math.floor(Math.random() * dec + min)
  }
}
