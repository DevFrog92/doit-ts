// 함수 시그니처

type stringNumberFunc = (name:string, age:number) => void

let printMe: stringNumberFunc = function (name: string, age: number): void {
  console.log(`${name} ${age}`);
}

printMe('yong', 30);
// 일등 함수 혹은 일급 객체

let add = new Function('a', 'b', 'return a+b');
let result = add(1, 2);
console.log(result);

const init = (callback: () => void): void => {
  console.log("first")
  const response = callback()
  console.log(response)
  console.log("third")
}

init(() => 1 + 2)

// const calc = (value: number, callback: (number) => void): void => {
//   let add = (a, b) => a + b;
//   function multiply(a, b) { return a + b }
//   let result = multiply(add(1, 2), value)
//   callback(result)
// }

// calc(30, (result: number) => console.log(`result is ${result}`));


type Person = { name: string, age: number }
const makePerson = (name: string, age: number = 10): Person => ({ name, age });
const printPerson = ({name, age}: Person): void => console.log(`name: ${name}, age: ${age}`)
console.log(makePerson('Jack'))
console.log(makePerson('Jack',30))
printPerson({name:'hello test code', age:120})

const dyObj = {}
const key = "hello"
// dyObj[key] = 1ㅊㅇ
console.log(dyObj)

// indexable type
type KeyValueType = {
  [key: string]: string;
}

const makeObject = (key: string, value: string): KeyValueType => ({ [key]: value })

console.log(makeObject('name','Jack'))
console.log(makeObject('nameTwo','Jhone'))

const add1 = (a: number, b: number): number => a + b
const add2 = (a: number): (number: number) => number => (b: number): number => a + b
console.log(add2(1)(2))

