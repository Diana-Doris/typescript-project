import { Color } from './enums'

export type Deck = NormalCard[]

export type NormalCard = {
  color: Color
  // mark: number
  mark: string
}
