import * as R from "ramda"
import { IPerson, makeRandomIPerson } from "./model/person"

const person:IPerson = makeRandomIPerson()
console.log(person)

const name = R.pipe(
  R.prop('name'),
  R.tap(name => console.log(name))
)(person)
