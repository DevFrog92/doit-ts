import * as R from "ramda"

const incNumbers = R.pipe(
  R.map(R.add(1)),
  R.tap(n => console.log(n))
)

const newNumbers = incNumbers(R.range(1, 9 + 1))