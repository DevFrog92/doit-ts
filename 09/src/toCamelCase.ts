import * as R from "ramda"

type StringToStringFunc = (string) => string
export const toCamelCase = (delim: string): StringToStringFunc => {
  const makeFirstToCapital = (word: string):string => {
    const characters = word.split('')
    return characters.map((c, index) => index === 0 ? c.toUpperCase() : c).join('')
  }

  const indexedMap = R.addIndex(R.map)
  return R.pipe(
    R.trim,
    R.split(delim),
    R.map(R.toLower),
    indexedMap((value:string, index:number) => index > 0 ? makeFirstToCapital(value) : value) as StringToStringFunc,
    //@ts-ignore
    R.join('')
  ) as StringToStringFunc
}
// addIndex의 경우 타입스크립트로 컴파일 한다면 함수 타입이 잘못 정의 되어 있어서 오류를 발생시킨다.

console.log(
  toCamelCase(' ')("hello world"),
  toCamelCase('_')("hello_typescript_word"),
)