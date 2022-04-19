import * as R from "ramda"

// R.add(a: number)(b:number)
// R.subtract(a: number)(b:number)
// R.multiply(a: number)(b:number)
// R.divide(a: number)(b:number)

// point exist
const inc = (b: number): number => R.add(1)(b)

// point not exist
const int_ = R.add(1)

R.map((n: number) => inc(n))
R.map(inc)
R.map(R.add(1))