import * as R from "ramda"
import { IPerson } from "./model/person"

export const displayPersons = (prefix: string) => R.pipe(
  R.map((person:IPerson) => ({name: person.name, age: person.age})),
  R.tap(obj => console.log(prefix, obj))
) as any