import { f, g, h, compose } from "./function-compose";

const composedFGH = compose(h, g, f)
console.log(composedFGH("x"))