// function mixinArray<T, K>(arr1: T[], arr2: K[]): (T | K)[] {
//   if (arr1.length !== arr2.length) {
//     throw new Error('两个数组不相等！')
//   }
//   let result: (T | K)[] = []
//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i])
//     result.push(arr2[i])
//   }
//   return result
// }

// console.log(mixinArray([1, 2], ['a', 'b']))

// interface hasNameProperty {
//   name: string
// }
// function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
//   obj.name = obj.name
//     .split(' ')
//     .map((s) => s[0].toLocaleUpperCase() + s.substring(1))
//     .join(' ')

//   return obj
// }

// const o = {
//   name: 'kevin yuan',
//   age: 22,
//   gender: '男 ',
// }

// const newO = nameToUpperCase(o)
// console.log(newO.name)
// function take<T>(arr: T[], n: number): T[] {
//   if (n >= arr.length) {
//     return arr
//   } else {
//     // return arr.splice(0,n)
//     const newArr: T[] = []
//     for (let i = 0; i < n; i++) {
//       newArr.push(arr[i])
//     }
//     return newArr
//   }
// }

// import { ArrayHelper } from './ArrayHelper'

// // const helper = new ArrayHelper<number>([1, 2, 3, 4, 5 ])
// const helper = new ArrayHelper([1, 2, 3, 4, 5])
// const taker = helper.take(2)
// console.log(taker)

// take<number>([1, 2, 3], 1)
// take([1, 2, 3], 1)

// 回调函数：判断数组中的某一项是否满足条件
// 类型别名
// type callback<T> = (n: T, i: number) => boolean

// function filters<T>(arr: T[], callback: callback<T>) {
//   const newArr: T[] = []

//   newArr.forEach((n, i) => {
//     if (callback(n, i)) {
//       newArr.push(n)
//     }
//   })
// }

// filters([1, 2, 3, 4], (n) => n % 2 !== 0)

// 接口
// interface callback<T> {
//   (n: T, i: number): boolean
// }

// function filters<T>(arr: T[], callback: callback<T>) {
//   const newArr: T[] = []

//   newArr.forEach((n, i) => {
//     if (callback(n, i)) {
//       newArr.push(n)
//     }
//   })
// }

// filters([1, 2, 3, 4], (n) => n % 2 !== 0)

// 类
