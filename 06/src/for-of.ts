// recursive
function range(from:number, to:number):number[] {
  if(from > to) {
    return []
  }

  return [from, ...range(from+1, to)]
}

for(let value of range(1, 3+1)) {
  console.log(value)
}