import * as R from "ramda"

type NumToNumFun = (n: number) => number
const applyDiscount = (minimum: number, discount: number): NumToNumFun =>
  R.pipe(
    R.ifElse(
      R.flip(R.gte)(minimum), // a >= b =>  b >= a
      R.flip(R.subtract)(discount),
      R.identity
    ),
    R.tap(n => console.log(n))
  )


const calcPrice = applyDiscount(5000, 500)

const discountedPrice = calcPrice(6000)
const notDiscountPrice = calcPrice(4500)