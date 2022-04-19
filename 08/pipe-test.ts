import { f, g, h } from "./function-compose";
import { pipe } from "./pipe";

// reverse가 없다.
const piped = pipe(f, g, h)
console.log(piped('x'))

// 고차함수
const add = x => y => x + y
// inc는 add의 부분 함수이다.
const inc = add(1)

const add3 = pipe(
  inc,
  add(2)
)

// add(inc(1))
console.log(add3(1))