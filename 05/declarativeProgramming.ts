
// imperative programming

let sum = 0;
for(let i = 0; i <= 100; i++) {
  sum += i;
}

console.log(sum)

// declarative programming
// high-level

import { range_re } from "./range"
import { fold_re } from "./fold"
import { filter_re } from "./filter"
import { map_re } from "./map"

const numbers: number[] = range_re(1, 101);
console.log(numbers)
console.log(fold_re(numbers, (result, value) => result + value, 0))

let oddSum = 0

console.log(filter_re(numbers, (value) => value%2 !== 0))
console.log(fold_re(filter_re(numbers, (value) => value%2 === 1), (result, value) => result+value, 0))

const isEven = (value:number):boolean => value % 2 === 0

console.log(fold_re(filter_re(numbers, isEven), (result, value) => result+value, 0))

console.log(fold_re(numbers, (result, value) => result + value**2,0))

console.log(map_re(numbers, (value) => value**2))

console.log(fold_re(map_re(numbers, (value) => value**2), (result, value) => result + value, 0))