import { FirstOrderFunc, SecondOrderFunc } from "./HOF";

export const add: SecondOrderFunc<number, number> =
(x: number): FirstOrderFunc<number, number> => (y: number):number => {
  console.log(x)
  console.log(y)
  return x + y
}

console.log(add(1)(2))