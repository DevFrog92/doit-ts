import IPerson from './person/IPerson';
import Person, { makePerson } from './person/Person';
import Chance from 'chance';
import * as R from 'ramda';

const chance = new Chance();
let persons: IPerson[] = R.range(0, 2).map((n: number) => new Person(chance.name(), chance.age()))

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane');
  let jake: IPerson = makePerson('Jake');
  console.log(jane, jake);
}

testMakePerson();