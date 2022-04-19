import * as R from "ramda"

export const dump = R.pipe(
  R.tap(n => console.log(n))
)

// 타입 단언을 통해서 R.pipe의 return value의 type을 T[]로 강제해준다.
export const dump_type = <T>(array: T[]): T[] => R.pipe(
  R.tap(n => console.log(n))
)(array) as T[]