// array in ts
import { split } from "./split";
import { join } from "./join";

let numbers = [1, 2, 3];
let strings = ['one', 'two', 'three'];
let objects = { name: "yong", age: 20 };

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['one', 'two', 'three'];

type IPerson = {
  name: string;
  age?: number;
}

let personArray: IPerson[] = [{ name: 'yong' }, { name:"hello", age: 10 }];

console.log(numbers, strings)
console.log(Array.isArray(numbers), Array.isArray(objects));
console.log(split("hello"), split("h_e_l_l_o", "_"));
console.log(join(split("hello"),), join(split("h_e_l_l_o", "_")));
console.log("hello".split("").join(''))

for (let i = 0; i < numArray.length; i++){
  const item: number = numArray[i];
  console.log(item);
}

for (let i in objects) {
  console.log(`${i}: ${objects[i]}`);
}

for (let i of numArray) {
  console.log(i)
}