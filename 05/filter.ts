export const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
  let result: T[] = []

  for (let index: number = 0; index < array.length; ++index) {
    const value = array[index];
    if (callback(value, index)){
      result = [...result, value];
    }
  }

  return result;
}

export const filter_re = <T>(array:T[], callback: (value:T, index?: number) => boolean): T[] => {
  let result: T[] = []

  for(let i = 0; i< array.length; i++) {
    const value = array[i]

    if(callback(value)) {
      result = [...result, value]
    }
  }

  return result
}