function* gen12() {
  yield 1
  yield 2
}

export function* gen12345() {
  // yield의 여부에 따라서 다음으로 진행된다.
  yield* gen12()
  yield* [3, 4]
  yield 5
}


export function* gen() {
  let count = 5
  let select = 0

  while(count--) {
    select = yield `you select ${select}`
  }
}

export const random = (max, min = 0) => Math.round(Math.random() * (max-min)) + min