import Person, { makePerson } from "./person/Person"
import IPerson from "./person/IPerson"

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane')
  let jake: IPerson = makePerson('Jake')
  console.log(jane, jake)
}

testMakePerson()