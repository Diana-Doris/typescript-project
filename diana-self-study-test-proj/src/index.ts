interface Condition {
  (n: number, i: number): boolean
  // 大括号里面没有任何的成员名称的时候，表示这个大括号只是一个定界符而已
}

function sum(numbers: number[], callBack: Condition): number {
  let s = 0
  numbers.forEach((n, i) => {
    if (callBack(n, i)) {
      s += n
    }
  })
  return s
}

// const result = sum([3, 4, 5, 6, 7, 8], (n) => n % 2 !== 0)//不报错  参数不能多  但是可以少
const result = sum([3, 4, 5, 6, 7, 8], (n, i) => i % 2 !== 0)

// interface User {
//   name?: string //?可选
//   age: number
// }
// let obj = {
//   age: 11,
//   newVal: 'gaga',
// }
// let u: User = obj //ok

// let u: User = {
//   age: 11,
// }//ok

// let u: User = {
//     age: 11,
//     newVal:'gaga'
// }// false

// interface Duck {
//   sound: 'gagaga'
//   swin(): void
// }

// let person = {
//   name: 'kevin',
//   age: 12,
//   sound: 'gagaga' as 'gagaga',
//   swin: () => {
//     console.log('gagaga')
//   },
// }

// let duck: Duck = person

// 假设有个函数，用于得到服务器某个接口的返回结果，是一个用户对象
// interface response {
//   loginID: string
//   name: string
//   gender: '男' | '女'
// }

// // 类型别名
// // type User = {
// //   name: string
// //   age: number
// // }
// // 接口定义
// interface User {
//   name: string
//   age: number
//   //   sayHello: () => void //是一个函数 函数没有参数 返回参数是一个void
//   sayHello(): void //是一个函数 函数没有参数 返回参数是一个void
// }

// // 接口定义和类型别名，在约束类中是存在区别的
// // 约束对象的时候，建议使用接口的方式

// let u: User = {
//   name: 'kevin',
//   age: 22,
//   sayHello() {
//     console.log('aaa')
//   },
// }

// type Condition = (n: number) => boolean
// interface Condition {
//   (n: number): boolean
//   // 大括号里面没有任何的成员名称的时候，表示这个大括号只是一个定界符而已
// }

// function sum(numbers: number[], callBack: Condition): number {
//   let s = 0
//   numbers.forEach((n) => {
//     if (callBack(n)) {
//       s += n
//     }
//   })
//   return s
// }

// const result = sum([3, 4, 5, 6, 7, 8], (n) => n % 2 !== 0)
// console.log(result)

// interface A {
//   T1: string
// }
// interface B {
//   T2: number
// }

// interface C extends A, B {
//   T3: string
// }
// type A = {
//   T1: string
// }
// type B = {
//   T2: number
// }
// type C = {
//   T3: string
// } & A &
//   B
// const obj: C = {
//   T2: 99,
//   T1: '99',
//   T3: '00',
// }

// interface User {
//   readonly id: string
//   name: string
//   age: number
//   readonly arr: string[]
// }

// let U: User = {
//   id: '5',
//   name: 'kevin',
//   age: 12,
//   arr: ['00'],
// }

// U.arr.push('00')

// // U.id = '99' //可以用readonly进行只读限制,这样id就不能修改了

// let arr: readonly number[] = [3, 4, 5]

// let arr: ReadonlyArray<number> = [3, 4, 5]

// arr.push 加上了readonly  数组中改变函数，都不见了
