import * as R from "ramda"

const numbers: number[] = R.range(1, 9+1)

// 디버깅용 함수
R.tap(n => console.log(n))(numbers)

// R.pipe
R.pipe(
  R.tap(n => console.log(n))
)(numbers)


