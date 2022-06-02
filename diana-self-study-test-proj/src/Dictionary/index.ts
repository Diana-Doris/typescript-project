import { Dictionary } from './moudleFunc'

const dic = new Dictionary<string, number>()
dic.set('a', 1)
dic.set('b', 2)
dic.set('a', 11)
dic.set('c', 11)

dic.forEach((k, v) => {
  console.log(k, '---', v)
})
console.log(dic.size, '0000')
console.log(dic.has('c'))

dic.delete('c')
// console.log(dic)
console.log(dic.size, '0000')
