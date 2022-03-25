import {NumberToNumberFunc, add} from "./add"
// 정보 은닉이 가능하다.
let fn: NumberToNumberFunc = add(1)

let result = fn(2)
console.log(result)
console.log(add(1)(2))