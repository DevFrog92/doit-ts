export const f = <T>(x: T): string => `f(${x})`
export const g = <T>(x: T): string => `g(${x})`
export const h = <T>(x: T): string => `h(${x})`

export const compose = <T, R>(...functions: readonly Function[]): Function =>
(x: T) => {
  // pure function
  const deepCopiedFunctions = [...functions]

  return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
}