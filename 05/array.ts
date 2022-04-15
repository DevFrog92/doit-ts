// array in ts
import { split } from "./split";
import { join } from "./join";
import { range } from "./range";
import { fold } from "./fold";
import { filter } from "./filter";
import { map } from "./map";
import { pureSort } from "./pureSort"

// let numbers = [1, 2, 3];
let strings = ['one', 'two', 'three'];
let objects = { name: "yong", age: 20 };

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['one', 'two', 'three'];

type IPerson = {
  name: string;
  age?: number;
}

let personArray: IPerson[] = [{ name: 'yong' }, { name:"hello", age: 10 }];

// console.log(numbers, strings)
// console.log(Array.isArray(numbers), Array.isArray(objects));
console.log(split("hello"), split("h_e_l_l_o", "_"));
console.log(join(split("hello"),), join(split("h_e_l_l_o", "_")));
console.log("hello".split("").join(''))

for (let i = 0; i < numArray.length; i++){
  const item: number = numArray[i];
  console.log(item);
}

for (let i in objects) {
  // console.log(`${i}: ${objects[i]}`);
}

for (let i of numArray) {
  console.log(i)
}

// generic

const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): Boolean => arrayLength<T>(array) === 0;

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty(numArray),
  isEmpty([])
);

const identity = <T>(n: T): T => n;

console.log(
  identity<boolean>(true),
  identity(true),
  identity('hello'),
)

// generic 형태로 구현된 함수는 원칙적으로 '함수이름'<타입변수>(매개변수)처럼 명시해 주어야 한다.

const normal = (cb: (number: number) => number): void => { };
const error = (cb: (arg:number, number?: number) => number): void => { }
const fixed = (cb: (a: number, number?: number) => number): void => { }
const fun = <T>(cb: (arg: T, i?: number) => number): void => { };


console.log(range(1, 10));

// 명령형 프로그래밍 방식
let sum: number = 0;
for (let val = 1; val <= 100;){
  sum += val++
}

console.log(sum);

// 선언형 프로그래밍 방식 - 데이터 생성과 가공 과정을 분리
let numbers: number[] = range(1, 100 + 1);
let result = fold(numbers, (result, val) => result + val, 0);
console.log(result)

let oddSum:number = 0;

for (let i = 1; i <= 100; i += 2){
  oddSum += i;
}

console.log(oddSum);

const isOdd = (n: number): boolean => n % 2 !== 0;
const isEvent = (n: number): boolean => n % 2 === 0;

let resultOdd = fold(
  filter(numbers, isOdd),
  (result, value) => result + value, 0
);

let resultEven = fold(
  filter(numbers, isEvent),
  (result, value) => result + value, 0
);

console.log(resultOdd, resultEven);

let resultSquare = fold(
  map(numbers, value => value ** 2),
  (result, value) => result + value,
  0
)

console.log(resultSquare);

const arrayNumber: number[] = range(1, 11);
const half = arrayNumber.length / 2;

let beforeHalf = arrayNumber.filter(value => value < half);
console.log(beforeHalf);

// const testObj = {}
for (let i = 0; i < 10; i++){
  const key = i;
  const value = i * i;
  const testObj = {
    [key]: value
  }

  console.log(testObj)
}

let beforeSort = [5, 3, 2, 1, 9];
const afterSort = pureSort(beforeSort)

console.log(beforeSort, afterSort);