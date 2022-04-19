import { map } from "./map"

const square = (value:number): number => value * value
export const squareMap = map(square)