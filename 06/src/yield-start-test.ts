import { gen12345 } from "./yield-start";
import { gen, random } from "./yield-start";

for(let value of gen12345()) {
  console.log(value)
}

const iter = gen()

while(true) {
  // next의 parameter는 yield의 반환값이 된다.
  const {value, done} = iter.next(random(10,1))
  if(done) break
  console.log(value)
}