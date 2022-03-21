import { IPerson, makePerson } from "./person/Person"

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane')
  let jake: IPerson = makePerson('Jake')
  console.log(jane, jake)
}

testMakePerson()