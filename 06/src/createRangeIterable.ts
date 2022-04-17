// 결국 반복기는 클로저이다.
export const createRangeIterable = (from: number, to: number) => {
  let currentValue = from

  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined
      const done = value == undefined
      return {value, done}
    }
  }
}