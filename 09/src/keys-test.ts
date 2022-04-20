import * as R from "ramda"
import { IPerson, makeRandomIPerson } from "./model/person"

const originalPerson = makeRandomIPerson()
const keys: string[] = R.keys(originalPerson)
const values: any[] = R.values(originalPerson)

console.log(keys, values)

const zippedPerson = R.zipObj(keys, values)
console.log(originalPerson, zippedPerson)

import { makeRandomICoordinates } from "./model/coordinates"

console.log(makeRandomICoordinates())