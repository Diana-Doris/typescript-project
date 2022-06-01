class User {
  readonly id: number //不能修改
  // name: string
  // age: number
  gender: '男' | '女' = '男'
  pid?: string
  private _publishNumber: number = 3 // 每天一共发布多少篇文章数量
  private _currentNumber: number = 0 // 每天可以多少篇文章数量

  constructor(private _name: string, private _age: number) {
    // 默认值 性别
    // this.name = name
    // this.age = age
    this.id = Math.random()
    // this.gender = gender
  }

  set age(value: number) {
    this._age = value
  }

  get age() {
    return this._age
  }

  publish(title: string) {
    if (this._currentNumber < this._publishNumber) {
      console.log('发布一篇文章', title)
      this._currentNumber++
    } else {
      console.log('今日不能发布了～')
    }
  }
}

const u = new User('a', 1)
u.age = 1
console.log(u.age)
