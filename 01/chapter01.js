let a = 1;
let b = 2;

// swap
[a, b] = [b, a];
console.log(a, b);


// 왜 내부 보다 외부의 console.log가 먼저 찍히는가?
async function get() {
  console.log("called")
  let values = [];
  values.push(await Promise.resolve(1))
  values.push(await Promise.resolve(2))
  values.push(await Promise.resolve(3))
  console.log('hello', values);
  return values
}

console.log(get(), 'call');