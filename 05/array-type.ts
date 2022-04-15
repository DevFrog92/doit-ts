import {
  range_re
} from "./range"

const identity = <T>(n:T):T =>n;
console.log(
  identity<boolean>(true),
  identity(false),
  identity("hello"),
)


// signature error

type normalCB = (arg1: number) => number
type errorCb = (arg1: number, arg2?: number) => number

const normal = (cb: normalCB):void => {};
const error = (cb: errorCb):void => {};

console.log(range_re(1, 10))