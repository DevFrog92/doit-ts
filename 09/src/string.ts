import * as R from "ramda"

// trim: javascript trim
console.log(R.trim("\t hello \n"))

//
const words: string[] = R.split('   ')("Hello world!,   I'm Peter.")
console.log(words)

const word = R.join("||")(words)
console.log(word)

