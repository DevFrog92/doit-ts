import { FirstOrderFunc } from "./HOF";

export const inc: FirstOrderFunc<number, number> = (x: number): number => x +1
