import * as R from "ramda"
import { flipMap } from "./flipMap"
import { chainTwoFunc } from "./chainTwoFunc"

const array = [1,2,3]

R.pipe(
  R.chain(n => [n, n]),
  R.tap(n => console.log(n))
)(array)

R.pipe(
  R.chain(R.append, R.head),
  R.tap(n => console.log(n))
)(array)

// 아래와 같이 동작한다.

R.pipe(
  flipMap(n => [n,n]),
  R.tap(n => console.log(n))
)(array)

R.pipe(
  chainTwoFunc(R.append, R.head),
  R.tap(n => console.log(n))
)(array)