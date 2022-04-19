import { pipe } from "./pipe";
import { squareMap } from "./squareMap";

const fourSquare = pipe(
  squareMap,
  squareMap
)

console.log(fourSquare([3, 4]))