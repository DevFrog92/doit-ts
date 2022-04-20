import * as R from "ramda"
import { IPerson, makeRandomIPerson } from "./model/person"

const person:IPerson = makeRandomIPerson()
const pairs: [string, any][] = R.toPairs(person)
console.log(pairs)

const person_re = R.fromPairs(pairs)

console.log(person_re)