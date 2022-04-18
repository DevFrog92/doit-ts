import { rangeGenerator } from "./rangeGenerator";
import { IterableUsingGenerator } from "./iterableUsingGenerator"

let iterable = rangeGenerator(1, 3+1)
while(1) {
  const {value, done} = iterable.next()
  if(done) break

  console.log(value)
}

for(let value of rangeGenerator(1, 3+1)){
  console.log(value)
}

console.log("IterableUsingGenerator")
for(let item of new IterableUsingGenerator([1,2,3]))
  console.log(item)

for(let item of new IterableUsingGenerator(["Hello", "generator", "!!!"]))
  console.log(item)

