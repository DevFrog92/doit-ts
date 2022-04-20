import * as R from "ramda"
import { makeLens, getter, setter, setterUsingFunc } from "./lens"
import {IPerson, makeRandomIPerson} from "./model/person"

const longitudeLense = R.lensPath(['location', "coordinates", "longitude"])
const getLongitude = getter(longitudeLense)
const setLongitude = setter(longitudeLense)
const setLongitudeUsingFunc = setterUsingFunc(longitudeLense)

const person:IPerson = makeRandomIPerson()

const name = getLongitude(person)
const newPerson = setLongitude(1111111111)(person)
const anotherPerson = setLongitudeUsingFunc(R.add(1111111111))(person)

console.log(
  name,
  newPerson,
  anotherPerson
)