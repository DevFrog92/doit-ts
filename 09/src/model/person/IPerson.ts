import { ILocation } from "../location";

export type IPerson = {
  name: string
  age: number
  title?: string
  location?: ILocation
}

// re-export를 위해서 {}로 감싸 주어야 한다.
export { ILocation }