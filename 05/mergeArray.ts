export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = []
  for(let index = 0; index < arrays.length; index++) {
    const array: T[] = arrays[index]

    result = [...result, ...array];
  }

  return result
}

console.log(mergeArray([1,2,3], [1,2,3], [1,2,3]))