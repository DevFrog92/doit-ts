import * as R from "ramda"

R.pipe(
  R.filter(R.lte(3)),
  R.tap(a => console.log(a))
)(R.range(1, 9 + 1))

R.pipe(
  R.filter(R.flip(R.gte)(3)),
  R.tap(a => console.log(a))
)(R.range(1, 9 + 1))

R.pipe(
  R.filter(R.gt(7)),
  R.tap(z => console.log(z))
)(R.range(1, 9 + 1))
// 기준은 앞의 parameter
// R.lt(a)(b) a < b
// R.lte(a)(b) a <= b
// R.gt(a)(b) a > b
// R.gte(a)(b) a >= b

R.pipe(
  R.filter(R.lte(3)),
  R.filter(R.gt(7)),
  R.tap(z => console.log(z))
)(R.range(1, 9 + 1))


// every
// R.allPass
// some
// R.anyPass

type NumberToBooleanFunc = (n: number) =>  boolean
export const selectRange = (min: number, max: number): NumberToBooleanFunc =>
  R.allPass([
    R.lte(min),
    R.gt(max)
  ])

R.pipe(
  R.filter(selectRange(3, 7)),
  R.tap(a => console.log(a))
)(R.range(1, 9 + 1))

const notRange = (min: number, max: number) => R.pipe(
  selectRange(min, max),
  R.not
)

R.pipe(
  R.filter(notRange(3, 7)),
  R.tap(a => console.log(a))
)(R.range(1, 9 + 1))

R.pipe(
  R.map(R.ifElse(
    R.lte(6),
    R.inc,
    R.dec
  )),
  R.tap(a => console.log(a))
)(R.range(1, 9 + 1))