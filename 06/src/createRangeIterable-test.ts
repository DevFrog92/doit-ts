import {createRangeIterable} from "./createRangeIterable"
import { RangeIterable } from "./RangeIterable"

const iterator = createRangeIterable(1, 3+1)

while(true) {
  const {value, done} = iterator.next()

  if(done) {
    break
  }
  console.log(value)
}

// [Symbol.iterable] method가 없다는 error가 발생한다.
// const iterable = createRangeIterable(1, 3+1);

// [Symbol.iterable]를 클래서 
const iterable = new RangeIterable(1, 3+1);
for(let value of iterable){
  console.log(value)
}

