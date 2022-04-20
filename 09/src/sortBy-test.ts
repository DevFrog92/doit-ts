import * as R from "ramda"
import {IPerson, makeRandomIPerson} from "./model/person"
import { displayPersons } from "./displayPersons"

const persons: IPerson[] = R.range(1, 4+1).map(makeRandomIPerson)
const nameSortedPersons = R.sortBy(R.prop("name"))(persons)
const ageSortedPersons = R.sortBy(R.prop("age"))(persons)
const nameSortedWithPersons = R.sortWith([
  R.descend(R.prop('name') as any)
])(persons)

displayPersons("sorted by name")(nameSortedPersons)
displayPersons("sorted by age")(ageSortedPersons)


displayPersons("sorted by name")(nameSortedWithPersons)
