enum Color {
  heart = '♥️',
  spade = '♠️',
  club = '♣️',
  diamond = '♦️',
}
enum Mark {
  A = 'A',
  two = '2',
  three = '3',
  four = '4',
  five = '5',
  six = '6',
  seven = '7',
  eight = '8',
  nine = '9',
  ten = '10',
  eleven = 'J',
  tweleve = 'Q',
  thirtheen = 'K',
}
// type Color = '♥️' | '♠️' | '♣️' | '♦️'
type Deck = NormalCard[]
type NormalCard = {
  color: Color
  // mark: number
  mark: string
}
function createDeck(): Deck {
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
  // for (let index = 1; index < 13; index++) {
  //   deck.push({
  //     mark: index,
  //     color: '♠️',
  //   })
  //   deck.push({
  //     mark: index,
  //     color: '♣️',
  //   })
  //   deck.push({
  //     mark: index,
  //     color: '♥️',
  //   })
  //   deck.push({
  //     mark: index,
  //     color: '♦️',
  //   })
  // }
  return deck
}
function printDeck(deck: Deck) {
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

const deck = createDeck()
printDeck(deck)
