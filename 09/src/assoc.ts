import * as R from "ramda"
import { IPerson, makeRandomIPerson } from "./model/person"

const getName = R.pipe(R.prop('name'), R.tap(name => console.log(name)))

const person: IPerson = makeRandomIPerson()

const originalName = getName(person)

const modifiedPerson = R.assoc('name', "Yongsu")(person)
const modifiedName = getName(modifiedPerson)

console.log(originalName, modifiedName)