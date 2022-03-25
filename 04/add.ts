export type NumberToNumberFunc = (number: number) => number

export const add = (a: number): NumberToNumberFunc => {
  // this는 현재 실행되고 있는 실행 컨텍스트를 참조한다.
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b
  }
  return _add
}