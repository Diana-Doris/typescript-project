// let say: string = 'hello'
// function test(num:number):number {
//     return num
// }
// test(9)
// console.log('80900')

import { type } from "os";

// let name: string | undefined ;
// if (typeof name === 'string') {
//     // 类型保护
//    console.log(name.length)
// }

// function printMeun(): void{
//     console.log('dayin')
// }

// function throwError(msg:string):never {
//     throw new Error(msg)
//     // console.log('ABC');
// }

// let a: "A";
// a = 'A';

// let gender: "男"|"女";
// gender = "男";
// gender = "女";

// let arr: [];//表示arr永远只是一个空数组

// let user: {
//     name: string,
//     age: number
// };//类型约束
// user = {
//     name: '',
//     age:99
// }

// let tu: [string, number];//必须是一个数组，数组长度为2，第一个必须是字符串，第二个必须是数字；
// tu = ['99',99]

// let data: any;
// data = '888';
// let num: number = data; //这样就会有类型隐患

// type Gender = '男' | '女'
// type User = {
//   name: string
//   age: string
//   gender: Gender
// }

// let u: User

// function getUsers(g:Gender): User[] {
//   return []
// }
/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
// function combinne(a: number, b: number): number
// function combinne(a: string, b: string): string

// function combinne(a: number | string, b: number | string): number | string{
//     if (typeof a==='number' && typeof b==='number') {
//         return a*b
//     } else if (typeof a==='string' && typeof b==='string') {
//         return a+b
//     }
//     throw new Error('类型必须相同')
// }
// const result = combinne(2,5)

function sum(a:number,b:number,c?:number) {
    if (c) {
       return a+b+c
    }
    else {
        return a+b
    }
}
sum(3, 4)

function sum1(a:number,b:number,c:number=0) {
    return a+b+c
}
sum1(3, 4)