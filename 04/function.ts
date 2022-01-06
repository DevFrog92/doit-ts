// 함수 시그니처

type stringNumberfunc = (string, number) => void;

let printMe: stringNumberfunc = function (name: string, age: number): void {
  console.log(`${name} ${age}`);
}

printMe('yong', 30);
// 일등 함수 혹은 일급 객체

let add = new Function('a', 'b', 'return a+b');
let result = add(1, 2);
console.log(result);

const init = (callback: () => void): void => {
  console.log("first")
  callback()
  console.log("third")
}

init(() => console.log("second, call back"))

const calc = (value: number, callback: (number) => void): void => {
  let add = (a, b) => a + b;
  function multiply(a, b) { return a + b }
  let result = multiply(add(1, 2), value)
  callback(result)
}

calc(30, (result: number) => console.log(`result is ${result}`));


type Person = { name: string, age: number }
const makePerson = (name: string, age: number = 10): Person => ({ name, age });

console.log(makePerson('Jack'))
console.log(makePerson('Jack',30))

const dyObj = {}
const key = "hello"
dyObj[key] = 1
console.log(dyObj)


type KeyValueType = {
  [key: string]: string;
}

const makeObject = (key: string, value: string): KeyValueType => ({ [key]: value })

console.log(makeObject('name','Jack'))
console.log(makeObject('nameTwo','Jhone'))