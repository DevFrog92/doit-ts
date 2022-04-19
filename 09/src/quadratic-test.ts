import * as R from 'ramda'
import { qudratic } from './quadratic'

const input: number[] = R.range(1, 9+1)
const quadraticResult = R.pipe(
  R.map(qudratic),
  R.tap(n =>  console.log(n))
)(input)