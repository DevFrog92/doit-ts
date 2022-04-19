import * as R from "ramda"
import { sum } from "./sum"

const curriedSum = R.curryN(4, sum)

console.log(
  curriedSum(),
  curriedSum(1),
  curriedSum(1,2),
  curriedSum(1,2,3),
  curriedSum(1,2,3,4),
)