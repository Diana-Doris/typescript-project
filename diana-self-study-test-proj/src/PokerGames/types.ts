import { Color } from './enums'

// export type Deck = NormalCard[]
// 第一种做法
// export type Deck = (NormalCard | Joker)[]

// export interface NormalCard {
//   color: Color
//   // mark: number
//   mark: string
// }

// export interface Joker {
//   type: 'big' | 'small'
// }

// 第二种做法
export type Deck = Card[]
export interface Card {
  getString(): string
}

export interface NormalCard extends Card {
  color: Color
  // mark: number
  mark: string
}

export interface Joker extends Card {
  type: 'big' | 'small'
}
