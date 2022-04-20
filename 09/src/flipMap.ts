import * as R from "ramda"

export const flipMap = (f) => R.pipe(
  R.map(f),
  R.flatten
)